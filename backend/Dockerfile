FROM node:18

WORKDIR /app

RUN npm i -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
