import { buildServer } from '@src/server.js'

let server: ReturnType<typeof buildServer>
let address: string

export function getAddress() {
  return address
}

export async function startService() {
  server = buildServer()
  address = await server.listen()
}

export async function stopService() {
  await server.close()
}
