FROM node:16-alpine

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build

EXPOSE 8000
CMD ["http-server", "dist"]