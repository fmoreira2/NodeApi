//Back-end api rest
import Fastify from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient}  from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

//lista retornando usuarios filtrados
app.get('/usuariosF', async () => {
    const usuarios = await prisma.usuario.findMany({
        where: {
            nome:{
                startsWith: 'Fe'
            }
        }
    })
    return usuarios
})

//lista de retornando todos os usuários
app.get("/usuarios", async () => {
  const usuarios = await prisma.usuario.findMany();
  return usuarios;
});

app.listen({
    port: 3333
})