import { buildServer } from '@src/server'

describe('GET /uuid', () => {
  it('200', async () => {
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/uuid'
    })

    expect(res.statusCode).toBe(200)
  })
})
