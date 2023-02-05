import { FastifyPluginAsync } from 'fastify'
import { IAPI } from '@src/contract.js'

export const routes: FastifyPluginAsync<{ API: IAPI }> = async (server, { API }) => {
  server.get('/uuid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = API.generateUUID()

    return reply.send(result)
  })
}
