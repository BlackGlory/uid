import Core from '@core'
import 'jest-extended'

describe('Nanoid', () => {
  describe('generate(): string', () => {
    it('return string', () => {
      const result = Core.Nanoid.generate()

      expect(result).toBeString()
    })

    it('return differenct strings', () => {
      const result1 = Core.Nanoid.generate()
      const result2 = Core.Nanoid.generate()

      expect(result1).not.toEqual(result2)
    })
  })
})
