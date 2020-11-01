import { FastifyPluginAsync } from 'fastify'

export const routes: FastifyPluginAsync<{ Core: ICore }> = async function routes(server, { Core }) {
  server.get('/nanoid', {
    schema: {
      response: {
        200: { type: 'string' }
      }
    }
  }, (req, reply) => {
    const result = Core.Nanoid.generate()
    reply.send(result)
  })
}
