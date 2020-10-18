import { FastifyPluginAsync } from 'fastify'
import { v4 as uuid } from 'uuid'

export const routes: FastifyPluginAsync = async function routes(server, options) {
  server.get('/uuid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    reply.send(uuid())
  })
}
