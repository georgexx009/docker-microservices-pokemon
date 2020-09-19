FROM node:14.11.0-alpine3.10

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]