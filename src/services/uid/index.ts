import { FastifyPluginAsync } from 'fastify'
import { routes as nanoidRoutes } from './nanoid.js'
import { routes as uuidRoutes } from './uuid.js'
import { IAPI } from '@src/contract.js'

export const routes: FastifyPluginAsync<{ API: IAPI }> = async (server, { API }) => {
  await server.register(nanoidRoutes, { API: API })
  await server.register(uuidRoutes, { API: API })
}
