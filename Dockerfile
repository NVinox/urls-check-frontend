FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS development
COPY . .
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173" ]

FROM base AS build-stage
COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

