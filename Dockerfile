FROM node:12-alpine
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm \
 && pnpm install \
 && pnpm store prune

COPY . ./

RUN pnpm build

ENV UID_HOST=0.0.0.0
ENV UID_PORT=8080
EXPOSE 8080
ENTRYPOINT ["pnpm"]
CMD ["--silent", "start"]
