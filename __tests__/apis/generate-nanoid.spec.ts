import { describe, it, expect } from 'vitest'
import { API } from '@apis/index.js'

describe('generateNanoID', () => {
  it('return string', () => {
    const result = API.generateNanoID()

    expect(result).not.toBe('')
  })

  it('return differenct strings', () => {
    const result1 = API.generateNanoID()
    const result2 = API.generateNanoID()

    expect(result1).not.toEqual(result2)
  })
})
