import { startService, stopService, getServer } from '@test/utils'

beforeEach(startService)
afterEach(stopService)

describe('GET /uuid', () => {
  it('200', async () => {
    const server = getServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/uuid'
    })

    expect(res.statusCode).toBe(200)
  })
})
