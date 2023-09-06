FROM node:18

FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY . .

RUN npm install

EXPOSE 8080
CMD [ "node", "server.js" ]
