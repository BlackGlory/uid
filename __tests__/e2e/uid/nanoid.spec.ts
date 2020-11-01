import { buildServer } from '@src/server'

describe('GET /nanoid', () => {
  it('200', async () => {
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/nanoid'
    })

    expect(res.statusCode).toBe(200)
  })
})
