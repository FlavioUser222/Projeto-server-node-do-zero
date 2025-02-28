
import { fastify } from "fastify"

const server = fastify()

server.get('/',()=>{
    return 'hello world'
})

server.get('/horarios',(request,reply)=>{
    let horarios = [
        {hora:"13:30"},
    ]

   reply.send(horarios)
})
server.get('/professores',(request,reply)=>{
    let professores = [
        {
            nome:"julio",
            email:"julio@gmail.com",
            senha:"1234",
        },
    ]
   reply.send(professores)
})
server.get('/notas',(request,reply)=>{
    let notas = [
        {
            materia:"Programação",
            nota:10,
        },
    ]
   reply.send(notas)
})
server.get('/livros',(request,reply)=>{
    let livros = [
       {
        foto: "https://m.media-amazon.com/images/I/71M-fsD472L._AC_UF1000,1000_QL80_.jpg",
        nome: "As Seis Lições",
        desconto: "50%",
        valor: 100,
    },
    {
        foto: "https://m.media-amazon.com/images/I/71M-fsD472L._AC_UF1000,1000_QL80_.jpg",
        nome: "As Seis Lições",
        desconto: "20%",
        valor: 100,
    },
    {
        foto: "https://m.media-amazon.com/images/I/71M-fsD472L._AC_UF1000,1000_QL80_.jpg",
        nome: "As Seis Lições",
        desconto: "15%",
        valor: 100,
    },
    {
        foto: "https://m.media-amazon.com/images/I/71M-fsD472L._AC_UF1000,1000_QL80_.jpg",
        nome: "As Seis Lições",
        desconto: "65%",
        valor: 100,
    },
    {
        foto: "https://m.media-amazon.com/images/I/71M-fsD472L._AC_UF1000,1000_QL80_.jpg",
        nome: "As Seis Lições",
        desconto: "5%",
        valor: 100,
    },
    ]
   reply.send(livros)
})


// server.post('/chamada')
// req.body.nome
// res.send

server.listen({ port: 3333, host: '0.0.0.0' });

