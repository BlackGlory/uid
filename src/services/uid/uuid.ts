import { FastifyPluginAsync } from 'fastify'
import { IAPI } from '@api/contract.js'

export const routes: FastifyPluginAsync<{ api: IAPI }> = async (server, { api }) => {
  server.get('/uuid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = api.UUID.generate()

    return reply.send(result)
  })
}
