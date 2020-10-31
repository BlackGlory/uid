import { buildServer } from '@src/server'
import Core from '@core'
import { mocked } from 'ts-jest/utils'
import '@blackglory/jest-matchers'

jest.mock('@core', () => {
  return {
    default: {
      generateNanoid: jest.fn().mockReturnValue('nanoid')
    }
  }
})

describe('GET /nanoid', () => {
  it('200', async () => {
    const generateNanoid = mocked(Core.generateNanoid)
    const server = buildServer()

    const res = await server.inject({
      method: 'GET'
    , url: '/nanoid'
    })

    expect(res.statusCode).toBe(200)
    expect(generateNanoid).toBeCalled()
    expect(res.body).toBeResultOf(generateNanoid)
  })
})
