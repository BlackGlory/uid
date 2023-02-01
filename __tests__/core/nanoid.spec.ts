import { api } from '@api/index.js'

describe('Nanoid', () => {
  describe('generate(): string', () => {
    it('return string', () => {
      const result = api.Nanoid.generate()

      expect(result).not.toBe('')
    })

    it('return differenct strings', () => {
      const result1 = api.Nanoid.generate()
      const result2 = api.Nanoid.generate()

      expect(result1).not.toEqual(result2)
    })
  })
})
