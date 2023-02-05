import { generateNanoID } from './generate-nanoid.js'
import { generateUUID } from './generate-uuid.js'
import { IAPI } from '@src/contract.js'

export const API: IAPI = {
  generateNanoID
, generateUUID
}
