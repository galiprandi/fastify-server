import fp from 'fastify-plugin'
import {
  FastifyPluginAsync,
  FastifyInstance,
  FastifyPluginOptions,
} from 'fastify'

const route: FastifyPluginAsync = async (
  server: FastifyInstance,
  { prefix = '' }: FastifyPluginOptions
) => {
  server.get(`${prefix}/health`, () => ({
    status: 'ok',
    timeStamp: new Date(),
  }))
}

export default fp(route)
