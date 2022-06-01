FROM node:14.10.0-alpine as builder
WORKDIR /app
COPY . /app
RUN apk add --no-cache git openssh && npm install && npm run-script build

FROM nginx:1.19.2-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
