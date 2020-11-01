import { buildServer } from '@src/server'
import Core from '@core'
import { mocked } from 'ts-jest/utils'
import '@blackglory/jest-matchers'

jest.mock('@core', () => {
  return {
    default: {
      UUID: {
        generate: jest.fn().mockReturnValue('uuid')
      }
    }
  }
})

describe('GET /uuid', () => {
  it('200', async () => {
    const generate = mocked(Core.UUID.generate)
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/uuid'
    })

    expect(res.statusCode).toBe(200)
    expect(generate).toBeCalled()
    expect(res.body).toBeResultOf(generate)
  })
})
