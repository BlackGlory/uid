const { nanoid } = require('nanoid/non-secure')

for (let i = 100000; i--; ) {
  nanoid()
}
