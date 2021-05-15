FROM node:15-alpine

ARG APP=gateaway

RUN echo "APP=" $APP

ARG PORT=3000

RUN echo "PORT=" $PORT

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

EXPOSE 4000-7000

CMD [ "npm", "start", "$APP" ]
