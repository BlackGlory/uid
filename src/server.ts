import fastify from 'fastify'
import cors from 'fastify-cors'
import { routes as nanoid } from '@src/services/nanoid'
import { routes as uuid } from '@src/services/uuid'
import { HTTP2 } from '@env'

export function buildServer({ logger = false }: Partial<{ logger: boolean }> = {}) {
  const server = fastify({
    logger
    /* @ts-ignore */
  , http2: HTTP2()
  })
  server.register(cors, { origin: true })
  server.register(nanoid)
  server.register(uuid)
  return server
}
