
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


// server.post('/chamada')
// req.body.nome
// res.send

server.listen({ port: 3333, host: '0.0.0.0' });

