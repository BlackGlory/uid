import { Benchmark } from 'extra-benchmark'
import { nanoid } from './nanoid'
import { nanoidNonSecure } from './nanoid-non-secure'
import { uuid } from './uuid'
import { go } from '@blackglory/go'

const benchmark = new Benchmark('UUID')

benchmark.addCase('nanoid', () => () => {
  nanoid()
})

benchmark.addCase('nanoid/non-secure', () => () => {
  nanoidNonSecure()
})

benchmark.addCase('uuid', () => () => {
  uuid()
})

go(async () => {
  for await (const result of benchmark.run()) {
    console.log(result)
  }
})
