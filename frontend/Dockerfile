# STEP 1 - BUILD VUE PROJECT
FROM node:14.14.0-slim AS BUILD-STAGE
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

# STEP 2 - Configure Nginx
FROM nginx:1.19.3-alpine AS PROD-STAGE
COPY --from=BUILD-STAGE /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]