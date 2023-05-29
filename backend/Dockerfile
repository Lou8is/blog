FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

#copy files not in .dockerignore
COPY . .

RUN npm run build


