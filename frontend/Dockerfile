FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN npm install

CMD npm start
