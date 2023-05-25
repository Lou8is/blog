FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

#copy files not in .dockerignore
COPY . .
COPY .env.docker .env

RUN npm run build


