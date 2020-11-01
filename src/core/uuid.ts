import { v4 as uuid } from 'uuid'

export function generate(): string {
  return uuid()
}
