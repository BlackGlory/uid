import { buildServer } from '@src/server'

describe('uuid', () => {
  describe('GET /uuid', () => {
    it('200', async () => {
      const server = buildServer()

      const res1 = await server.inject({
        method: 'GET'
      , url: '/uuid'
      })
      const res2 = await server.inject({
        method: 'GET'
      , url: '/uuid'
      })

      expect(res1.statusCode).toBe(200)
      expect(res2.statusCode).toBe(200)
      expect(res1.body).not.toBe(res2.body)
    })
  })
})
