FROM node:15-alpine

ARG APP=gateaway

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000-10000

CMD [ "npm", "start", "$APP" ]