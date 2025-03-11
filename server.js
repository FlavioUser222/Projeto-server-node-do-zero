import { fastify } from "fastify";

const server = fastify();

// Rota de exemplo
server.get('/', () => {
  return 'hello world';
});

// Função para chamar a API da OpenAI
async function chamarOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY; // Certifique-se de definir sua chave API da OpenAI como variável de ambiente
  
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',  // Ou "gpt-3.5-turbo" dependendo da sua necessidade
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error('Erro ao chamar a OpenAI');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Rota para gerar uma resposta com OpenAI
server.get('/gerar-resposta', async (request, reply) => {
  try {
    // Obter o prompt do usuário via query string
    const prompt = request.query.prompt || "Fale sobre saúde mental";

    // Chamar a função que acessa a API da OpenAI
    const aiResponse = await chamarOpenAI(prompt);

    // Enviar a resposta ao usuário
    reply.send({ resposta: aiResponse });
  } catch (error) {
    console.error('Erro ao chamar a OpenAI:', error);
    reply.status(500).send({ error: "Erro ao gerar resposta com a OpenAI" });
  }
});

// Iniciar o servidor Fastify
server.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
