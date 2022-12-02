import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/go'
import { v4 as uuid } from 'uuid'
import { nanoid } from 'nanoid'
import { nanoid as nanoidNonSecure } from 'nanoid/non-secure'

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
