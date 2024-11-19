import Fastify from 'fastify'
import { logger as loggerInstance } from '../logger/pino.js'

export const buildServer = async (opts = {}) => {
  const server = Fastify({
    loggerInstance,
    ...opts,
  })

  // Health check route
  server.get('/health', () => ({ status: 'ok', timeStamp: new Date() }))

  // Error handler
  server.setErrorHandler((error, _request, reply) => {
    server.log.error(error)
    reply.status(500).send({ error: 'Something went wrong' })
  })

  const startServer = async ({ port }: StartServerProps) => {
    try {
      await server.listen({
        port,
        listenTextResolver(address) {
          return `🚀 Server health check available at: ${address}/health`
        },
      })
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }

  return { server, startServer }
}

type StartServerProps = {
  port?: number
}
