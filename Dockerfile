FROM node:9 as builder

WORKDIR /src

COPY . .

RUN npm install && \
    npm run build

FROM nginx as app

COPY --from=builder /src/storybook-static/ /usr/share/nginx/html
