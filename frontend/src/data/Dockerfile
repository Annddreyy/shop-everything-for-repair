FROM node:16-alpine

RUN npm install -g json-server

COPY . .

EXPOSE 3000

CMD ["json-server", "--watch", "db.json"]