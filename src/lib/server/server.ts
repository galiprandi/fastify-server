import Fastify from 'fastify'
import { logger as loggerInstance } from '../logger/pino.js'

export const buildServer = async (opts = {}) => {
  const server = Fastify({
    loggerInstance,
    ...opts,
  })

  server.get('/health', () => ({ status: 'ok', timeStamp: new Date() }))

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
