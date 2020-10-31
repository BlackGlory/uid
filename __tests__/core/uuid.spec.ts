import { Core } from '@core'
import 'jest-extended'

describe('generateUUID(): string', () => {
  it('return string', () => {
    const result = Core.generateUUID()

    expect(result).toBeString()
  })

  it('return different strings', () => {
    const result1 = Core.generateUUID()
    const result2 = Core.generateUUID()

    expect(result1).not.toEqual(result2)
  })
})
