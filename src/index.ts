import { go } from '@blackglory/go'
import { buildServer } from './server.js'
import { PORT, HOST, NODE_ENV, NodeEnv } from '@env/index.js'

go(async () => {
  const server = await buildServer()
  await server.listen({ port: PORT(), host: HOST() })
  if (NODE_ENV() === NodeEnv.Test) process.exit()

  process.send?.('ready')
})
