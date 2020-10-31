import { buildServer } from '@src/server'
import Core from '@core'
import { mocked } from 'ts-jest/utils'
import '@blackglory/jest-matchers'

jest.mock('@core', () => {
  return {
    default: {
      generateUUID: jest.fn().mockReturnValue('uuid')
    }
  }
})

describe('GET /uuid', () => {
  it('200', async () => {
    const generateUUID = mocked(Core.generateUUID)
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/uuid'
    })

    expect(res.statusCode).toBe(200)
    expect(generateUUID).toBeCalled()
    expect(res.body).toBeResultOf(generateUUID)
  })
})
