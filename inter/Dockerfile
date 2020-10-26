FROM node:14.14.0-slim
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn start
