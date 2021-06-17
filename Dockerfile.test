FROM node:14-alpine
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN apk add --update --no-cache --virtual .build-deps \
      git \
 && yarn install \
 && yarn cache clean \
 && apk del .build-deps

COPY . ./

RUN yarn build

ENV UID_HOST=0.0.0.0
ENV UID_PORT=8080
EXPOSE 8080
ENTRYPOINT ["yarn"]
CMD ["--silent", "start"]
