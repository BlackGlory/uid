import { api } from '@api/index.js'

describe('UUID', () => {
  describe('generate(): string', () => {
    it('return string', () => {
      const result = api.UUID.generate()

      expect(result).not.toBe('')
    })

    it('return different strings', () => {
      const result1 = api.UUID.generate()
      const result2 = api.UUID.generate()

      expect(result1).not.toEqual(result2)
    })
  })
})
