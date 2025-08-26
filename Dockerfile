FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


EXPOSE 3000

CMD ["node", "dist/main"]

# Expose the API port
EXPOSE 4000

CMD ["npm", "run", "start:prod"]

