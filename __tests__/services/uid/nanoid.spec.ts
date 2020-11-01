import { buildServer } from '@src/server'
import Core from '@core'
import { mocked } from 'ts-jest/utils'
import '@blackglory/jest-matchers'

jest.mock('@core', () => {
  return {
    default: {
      Nanoid: {
        generate: jest.fn().mockReturnValue('nanoid')
      }
    }
  }
})

describe('GET /nanoid', () => {
  it('200', async () => {
    const generate = mocked(Core.Nanoid.generate)
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/nanoid'
    })

    expect(res.statusCode).toBe(200)
    expect(generate).toBeCalled()
    expect(res.body).toBeResultOf(generate)
  })
})
