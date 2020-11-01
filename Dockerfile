FROM node:12-alpine
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install \
 && yarn cache clean

COPY . ./

RUN yarn build

ENV UID_HOST=0.0.0.0
EXPOSE 8080
ENTRYPOINT ["yarn"]
CMD ["--silent", "start"]
