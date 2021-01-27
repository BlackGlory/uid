import fastify from 'fastify'
import cors from 'fastify-cors'
import { routes as uid } from '@services/uid'
import { routes as metrics } from '@services/metrics'
import { routes as robots } from '@services/robots'
import { HTTP2, NODE_ENV, NodeEnv } from '@env'
import Core from '@core'

export function buildServer() {
  const server = fastify({
    logger: getLoggerOptions()
    /* @ts-ignore */
  , http2: HTTP2()
  })
  server.register(cors, { origin: true })
  server.register(uid, { Core })
  server.register(metrics, { Core })
  server.register(robots)
  return server
}

function getLoggerOptions() {
  switch (NODE_ENV()) {
    case NodeEnv.Test: return { level: 'error' }
    case NodeEnv.Production: return { level: 'error' }
    case NodeEnv.Development: return { level: 'trace' }
    default: return false
  }
}
