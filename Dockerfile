FROM node:15-alpine

ARG APP=gateaway
ARG WATCH

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD [ "npm", "start", "$APP", "$WATCH" ]
