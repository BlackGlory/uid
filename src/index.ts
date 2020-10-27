import { buildServer } from './server'
import { PORT, HOST, CI } from '@env'

;(async () => {
  const server = await buildServer()
  await server.listen(PORT(), HOST())
  if (CI()) await server.close()
})()
