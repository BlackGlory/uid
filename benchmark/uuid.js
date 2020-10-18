const { v4: uuidv4 } = require('uuid')

for (let i = 100000; i--; ) {
  uuidv4()
}
