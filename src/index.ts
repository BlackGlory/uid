import { buildServer } from './server'
import { PORT, HOST, CI } from '@env'

process.on('SIGHUP', () => process.exit(1))

;(async () => {
  const server = await buildServer()
  await server.listen(PORT(), HOST())
  if (CI()) await server.close()
})()
