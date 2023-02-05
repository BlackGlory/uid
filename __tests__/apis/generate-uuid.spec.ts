import { API } from '@apis/index.js'

describe('generateUUID', () => {
  it('returns string', () => {
    const result = API.generateUUID()

    expect(result).not.toBe('')
  })

  it('returns different strings', () => {
    const result1 = API.generateUUID()
    const result2 = API.generateUUID()

    expect(result1).not.toEqual(result2)
  })
})
