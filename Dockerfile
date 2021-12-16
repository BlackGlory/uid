FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN apk add --update --no-cache --virtual .build-deps \
      git \
 && yarn install \
 && yarn cache clean \
 && apk del .build-deps

COPY . ./

RUN yarn build

FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/lib /usr/src/app/lib
COPY package.json yarn.lock ./

RUN apk add --update --no-cache --virtual .build-deps \
      git \
 && yarn install --production \
 && yarn cache clean \
 && apk del .build-deps \
 && apk add --update --no-cache \
      # healthcheck
      curl

COPY . ./

ENV UID_HOST=0.0.0.0
ENV UID_PORT=8080
EXPOSE 8080
HEALTHCHECK CMD curl --fail http://localhost:8080/health || exit 1
ENTRYPOINT ["yarn"]
CMD ["--silent", "start"]
