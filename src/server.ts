import fastify from 'fastify'
import cors from 'fastify-cors'
import metricsPlugin = require('fastify-metrics')
import { Registry } from 'prom-client'
import { routes as uid } from '@services/uid'
import { routes as robots } from '@services/robots'
import { routes as health } from '@services/health'
import { HTTP2, NODE_ENV, NodeEnv } from '@env'
import Core from '@core'

type LoggerLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'

export function buildServer() {
  const server = fastify({
    logger: getLoggerOptions()
    /* @ts-ignore */
  , http2: HTTP2()
  })
  server.register(metricsPlugin, {
    endpoint: '/metrics'
  , register: new Registry()
  })

  server.register(cors, { origin: true })
  server.register(uid, { Core })
  server.register(robots)
  server.register(health)

  return server
}

function getLoggerOptions(): { level: LoggerLevel } | boolean {
  switch (NODE_ENV()) {
    case NodeEnv.Test: return { level: 'error' }
    case NodeEnv.Production: return { level: 'error' }
    case NodeEnv.Development: return { level: 'trace' }
    default: return false
  }
}
