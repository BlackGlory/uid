import { buildServer } from '@src/server'

let server: ReturnType<typeof buildServer>

export function getServer() {
  return server
}

export async function startService() {
  server = buildServer()
}

export async function stopService() {
  server.metrics.clearRegister()
  await server.close()
}
