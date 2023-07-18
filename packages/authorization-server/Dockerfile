FROM node:18-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY cert.conf ./
RUN yarn cert
COPY --from=builder /app/dist ./dist
CMD node --inspect=0.0.0.0:9230 ./dist/index.js
