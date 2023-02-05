import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { routes as uid } from '@services/uid/index.js'
import { routes as robots } from '@services/robots/index.js'
import { routes as health } from '@services/health/index.js'
import { NODE_ENV, NodeEnv } from '@env/index.js'
import { API } from '@apis/index.js'
import path from 'path'
import { getAppRoot } from '@utils/get-app-root.js'
import { readJSONFileSync } from 'extra-filesystem'
import { isntUndefined, isString } from '@blackglory/prelude'
import { assert } from '@blackglory/errors'
import semver from 'semver'

const pkg = readJSONFileSync<{ version: string }>(
  path.join(getAppRoot(), 'package.json')
)

type LoggerLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'

export async function buildServer() {
  const server = fastify({
    forceCloseConnections: true
  , logger: getLoggerOptions()
  })

  server.addHook('onRequest', async (req, reply) => {
    // eslint-disable-next-line
    reply.header('Cache-Control', 'private, no-cache')
  })
  server.addHook('onRequest', async (req, reply) => {
    const acceptVersion = req.headers['accept-version']
    if (isntUndefined(acceptVersion)) {
      assert(isString(acceptVersion), 'Accept-Version must be string')
      if (!semver.satisfies(pkg.version, acceptVersion)) {
        return reply.status(400).send()
      }
    }
  })

  await server.register(cors, { origin: true })
  await server.register(uid, { API })
  await server.register(robots)
  await server.register(health)

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
