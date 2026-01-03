FROM node:25

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN rm -f package-lock.json

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
