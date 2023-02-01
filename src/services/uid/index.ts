import { FastifyPluginAsync } from 'fastify'
import { routes as nanoidRoutes } from './nanoid.js'
import { routes as uuidRoutes } from './uuid.js'
import { IAPI } from '@api/contract.js'

export const routes: FastifyPluginAsync<{ api: IAPI }> = async (server, { api }) => {
  server.register(nanoidRoutes, { api })
  server.register(uuidRoutes, { api })
}
