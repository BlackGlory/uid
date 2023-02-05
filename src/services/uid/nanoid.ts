import { FastifyPluginAsync } from 'fastify'
import { IAPI } from '@src/contract.js'

export const routes: FastifyPluginAsync<{ API: IAPI }> = async (server, { API }) => {
  server.get('/nanoid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = API.generateNanoID()

    return reply.send(result)
  })
}
