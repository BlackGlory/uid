import { FastifyPluginAsync } from 'fastify'
import { routes as nanoidRoutes } from './nanoid'
import { routes as uuidRoutes } from './uuid'

export const routes: FastifyPluginAsync<{ Core: ICore }> = async function routes(server, { Core }) {
  server.register(nanoidRoutes, { Core })
  server.register(uuidRoutes, { Core })
}
