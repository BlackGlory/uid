import { FastifyPluginAsync } from 'fastify'

export const routes: FastifyPluginAsync<{ Core: ICore }> = async function routes(server, { Core }) {
  server.get('/uuid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = Core.generateUUID()
    reply.send(result)
  })
}
