export enum NodeEnv {
  Test
, Development
, Production
}

export function NODE_ENV(): NodeEnv | undefined {
  switch (process.env.NODE_ENV) {
    case 'test': return NodeEnv.Test
    case 'development': return NodeEnv.Development
    case 'production': return NodeEnv.Production
  }
}

export function PORT(): number {
  if (process.env.UID_PORT) {
    return Number(process.env.UID_PORT)
  } else {
    return 8080
  }
}

export function HOST(): string {
  return process.env.UID_HOST ?? 'localhost'
}

export function HTTP2(): boolean {
  return process.env.UID_HTTP2 === 'true'
}

export function CI(): boolean {
  return process.env.CI === 'true'
}
