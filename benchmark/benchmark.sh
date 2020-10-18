#!/bin/sh

hyperfine \
  --warmup 3 \
  --export-markdown benchmark-result.md \
  'node ./benchmark/uuid.js' \
  'node ./benchmark/nanoid.js' \
  'node ./benchmark/nanoid-non-secure.js'
