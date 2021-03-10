import { startService, stopService, getServer } from '@test/utils'

beforeEach(startService)
afterEach(stopService)

describe('metrics', () => {
  describe('GET /metrics', () => {
    it('200', async () => {
      const server = getServer()

      const res = await server.inject({
        method: 'GET'
      , url: '/metrics'
      })

      expect(res.statusCode).toBe(200)
    })
  })
})
