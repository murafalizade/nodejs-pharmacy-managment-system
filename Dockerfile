FROM node:12-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "swagger.js" , "swagger-output.json", ".env", "./"]

COPY ./src ./src

RUN npm install --silent

CMD npm run start-gendoc


