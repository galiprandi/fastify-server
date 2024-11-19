import Fastify from 'fastify'
import { logger as loggerInstance } from '../logger/pino.js'

export const buildServer = async () => {
  const instance = Fastify({
    loggerInstance,
  })

  instance.get('/health', () => ({ status: 'ok', timeStamp: new Date() }))

  const startServer = async ({ port }: StartServerProps) => {
    try {
      await instance.listen({
        port,
        listenTextResolver(address) {
          return `🚀 Server health check available at: ${address}/health`
        },
      })
    } catch (err) {
      instance.log.error(err)
      process.exit(1)
    }
  }

  return { server: instance, startServer }
}

type StartServerProps = {
  port?: number
}
