# @(#) Dockerfile
# usage : $ docker build -t edicom/base -t latest .
FROM node:8-alpine

ENV ENV production
ENV PORT 8080

# Create app directory
RUN mkdir -p /usr/src/app && chown node:node /usr/src/app
RUN pwd
WORKDIR /usr/src/app
RUN pwd

# Install app dependencies
COPY app.policy.json /usr/src/app/app.policy.json
COPY package.docker.json /usr/src/app/package.json
COPY ecosystem.config.js /usr/src/app/ecosystem.config.js
COPY server.js /usr/src/app/server.js

RUN npm install

# Bundle app source
COPY /dist /usr/src/app
RUN chown -R node:node /usr/src/app && ls -la

EXPOSE ${PORT}

ENTRYPOINT [ "npm", "run", "prod" ]
