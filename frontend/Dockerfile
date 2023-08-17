FROM node:alpine

WORKDIR /app

COPY . .

RUN npm cache clean --force

RUN npm install

CMD npm start
