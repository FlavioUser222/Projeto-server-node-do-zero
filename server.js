
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

server.listen({ port: 3333 })

