FROM node:18

WORKDIR /usr/src/app

COPY ./server .

RUN npm ci

EXPOSE 3002

CMD ["node", "server.js"]