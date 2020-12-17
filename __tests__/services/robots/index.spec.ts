import { buildServer } from '@src/server'

describe('robots', () => {
  describe('GET /robots.txt', () => {
    it('200', async () => {
      const server = await buildServer()

      const res = await server.inject({
        method: 'GET'
      , url: '/robots.txt'
      })

      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toBe('text/plain')
      expect(res.body).toBe(
        'User-agent: *' + '\n'
      + 'Disallow: /'
      )
    })
  })
})
