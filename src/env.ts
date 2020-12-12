import { memoize } from 'lodash'

export enum NodeEnv {
  Test
, Development
, Production
}

export const NODE_ENV = memoize(function (): NodeEnv | undefined {
  switch (process.env.NODE_ENV) {
    case 'test': return NodeEnv.Test
    case 'development': return NodeEnv.Development
    case 'production': return NodeEnv.Production
  }
})

export const PORT = memoize(function (): number {
  if (process.env.UID_PORT) {
    return Number(process.env.UID_PORT)
  } else {
    return 8080
  }
})

export const HOST = memoize(function (): string {
  return process.env.UID_HOST ?? 'localhost'
})

export const HTTP2 = memoize(function (): boolean {
  return process.env.UID_HTTP2 === 'true'
})

export const CI = memoize(function (): boolean {
  return process.env.CI === 'true'
})
