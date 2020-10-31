import Core from '@core'
import 'jest-extended'

describe('generateNanoid(): string', () => {
  it('return string', () => {
    const result = Core.generateNanoid()

    expect(result).toBeString()
  })

  it('return differenct strings', () => {
    const result1 = Core.generateNanoid()
    const result2 = Core.generateNanoid()

    expect(result1).not.toEqual(result2)
  })
})
