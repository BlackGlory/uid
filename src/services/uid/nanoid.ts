import { FastifyPluginAsync } from 'fastify'
import { IAPI } from '@api/contract.js'

export const routes: FastifyPluginAsync<{ api: IAPI }> = async (server, { api }) => {
  server.get('/nanoid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = api.Nanoid.generate()

    return reply.send(result)
  })
}
