import { buildServer } from './lib/server/fastify.js'

const port = process.env.PORT ? Number(process.env.PORT) : 3000

const { startServer } = await buildServer()

startServer({ port })
