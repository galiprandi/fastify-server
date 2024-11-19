import Fastify from 'fastify'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { logger as loggerInstance } from '../logger/pino.js'

// Plugins
import blipp from 'fastify-blipp'
import autoload from '@fastify/autoload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const buildServer = async (opts = {}) => {
  const server = Fastify({
    loggerInstance,
    ...opts,
  })

  // Register plugins
  await server.register(blipp)

  // Register all routes
  await server.register(autoload, {
    dir: join(__dirname, '../../routes'),
    dirNameRoutePrefix: true,
    options: { prefix: '/api/' },
  })

  const startServer = async ({ port, printRoutes }: StartServerProps) => {
    try {
      await server.listen({
        port,
        listenTextResolver(address) {
          return `🚀 Server health check available at: ${address}/api/health`
        },
      })

      printRoutes && server.blipp()
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }

  return { server, startServer }
}

type StartServerProps = {
  port?: number
  printRoutes?: boolean
}
