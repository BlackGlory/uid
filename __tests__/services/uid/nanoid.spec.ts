import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { startService, stopService, getAddress } from '@test/utils.js'
import { fetch } from 'extra-fetch'
import { get } from 'extra-request'
import { url, pathname } from 'extra-request/transformers'

beforeEach(startService)
afterEach(stopService)

describe('GET /nanoid', () => {
  it('200', async () => {
    const res = await fetch(get(
      url(getAddress())
    , pathname('/nanoid')
    ))

    expect(res.status).toBe(200)
  })
})
