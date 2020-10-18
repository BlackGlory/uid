import { FastifyPluginAsync } from 'fastify'
import { nanoid } from 'nanoid'

export const routes: FastifyPluginAsync = async function routes(server, options) {
  server.get('/nanoid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    reply.send(nanoid())
  })
}
