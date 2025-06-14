FROM node:22
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

Expose 3000

CMD ["node","app.js"]
