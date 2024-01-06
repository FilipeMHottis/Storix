FROM node:20.10.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json .
COPY tsconfig.json .

RUN npm install

COPY ./src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]
