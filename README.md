# UID

Web-friendly microservice for generating unpredictable UIDs.

## Install & Run

The environment variables `UID_HOST` and `UID_PORT` can be used to set the address and port that the server listens to. The default values are localhost and 8080.

```sh
git clone https://github.com/BlackGlory/uid
cd uid
yarn install
yarn build
yarn --silent start
```

### Docker

```sh
docker run \
  --detach \
  --publish 8080:8080 \
  blackglory/uid
```

#### docker-compose.yml

```yml
version: '3.8'

services:
  uid:
    image: 'blackglory/uid'
    restart: always
    environment:
      - UID_HOST=0.0.0.0
    ports:
      - '8080:8080'
```

## Usage

### nanoid

`GET /nanoid`

curl
```sh
curl http://localhost:8080/nanoid
```

JavaScript
```sh
await fetch('http://localhost:8080/nanoid').then(res => res.text())
```

### uuid

`GET /uuid`

curl
```sh
curl http://localhost:8080/uuid
```

JavaScript
```sh
await fetch('http://localhost:8080/uuid').then(res => res.text())
```

## HTTP/2

UID supports HTTP/2 for multiplexed reverse proxy connections, which can be enabled by setting the environment variable `UID_HTTP2=true`.

This HTTP/2 support does not provide an automatic upgrade from HTTP/1.1, nor does it provide HTTPS.
Therefore, the `--http2-prior-knowledge` option needs to be enabled when testing in local curl.

## UID Benchmark

- Node.js v12.19.0
- hyperfine v1.11.0
- nanoid v3.1.12
- uuid v8.3.1

| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|---|---|---|---|---|
| `node ./benchmark/uuid.js` | 125.4 ± 8.0 | 118.4 | 155.8 | 1.54 ± 0.17 |
| `node ./benchmark/nanoid.js` | 191.7 ± 4.7 | 187.1 | 205.5 | 2.36 ± 0.22 |
| `node ./benchmark/nanoid-non-secure.js` | 81.2 ± 7.2 | 72.1 | 107.4 | 1.00 |
