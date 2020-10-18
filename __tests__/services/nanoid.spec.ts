import { buildServer } from '@src/server'

describe('nanoid', () => {
  describe('GET /nanoid', () => {
    it('200', async () => {
      const server = buildServer()

      const res1 = await server.inject({
        method: 'GET'
      , url: '/nanoid'
      })
      const res2 = await server.inject({
        method: 'GET'
      , url: '/nanoid'
      })

      expect(res1.statusCode).toBe(200)
      expect(res2.statusCode).toBe(200)
      expect(res1.body).not.toBe(res2.body)
    })
  })
})
