import { buildServer } from './server'
import { PORT, HOST } from '@src/config'

buildServer({ logger: true }).listen(PORT(), HOST(), (err, address) => {
  if (err) throw err
})
