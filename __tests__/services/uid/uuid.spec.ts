import { startService, stopService, getAddress } from '@test/utils'
import { fetch } from 'extra-fetch'
import { get } from 'extra-request'
import { url, pathname } from 'extra-request/lib/es2018/transformers'

beforeEach(startService)
afterEach(stopService)

describe('GET /uuid', () => {
  it('200', async () => {
    const res = await fetch(get(
      url(getAddress())
    , pathname('/uuid')
    ))

    expect(res.status).toBe(200)
  })
})
