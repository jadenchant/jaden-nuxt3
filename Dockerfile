ARG NODE_VERSION=node:22.14.0
FROM $NODE_VERSION AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM $NODE_VERSION AS production

WORKDIR /app
COPY --from=build /app/.output /app/.output

ENV NUXT_HOST=0.0.0.0
ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}
ENV NODE_ENV=production

CMD [ "node", "/app/.output/server/index.mjs" ]
