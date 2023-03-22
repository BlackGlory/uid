# UID
Web-friendly microservice for generating unpredictable UIDs.

## Quickstart
```sh
docker run \
  --detach \
  --publish 8080:8080 \
  blackglory/uid
```

## Install
The environment variables`UID_HOST`and`UID_PORT`can be used to set the address and port
that the server listens to.
The default values are `localhost` and `8080`.

```sh
git clone https://github.com/BlackGlory/uid
cd uid
yarn install
yarn build
yarn bundle
yarn --silent start
```

### Recipes
#### docker-compose.yml
```yaml
version: '3.8'

services:
  uid:
    image: 'blackglory/uid'
    restart: always
    ports:
      - '8080:8080'
```

## API
### generate Nano ID
`GET /nanoid`

Return a Nano ID as a text.

#### Example
##### curl
```sh
curl http://localhost:8080/nanoid
```

##### JavaScript
```js
await fetch('http://localhost:8080/nanoid')
  .then(res => res.text())
```

### generate UUID
`GET /uuid`

Return a uuid as a text.

#### Example
##### curl
```sh
curl http://localhost:8080/uuid
```

##### JavaScript
```js
await fetch('http://localhost:8080/uuid')
  .then(res => res.text())
```
