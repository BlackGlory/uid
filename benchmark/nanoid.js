const { nanoid } = require('nanoid')

for (let i = 100000; i--; ) {
  nanoid()
}
