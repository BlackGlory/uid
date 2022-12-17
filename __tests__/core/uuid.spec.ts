import Core from '@core/index.js'

describe('UUID', () => {
  describe('generate(): string', () => {
    it('return string', () => {
      const result = Core.UUID.generate()

      expect(result).not.toBe('')
    })

    it('return different strings', () => {
      const result1 = Core.UUID.generate()
      const result2 = Core.UUID.generate()

      expect(result1).not.toEqual(result2)
    })
  })
})
