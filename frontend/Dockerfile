# docker_tutorial/frontend/Dockerfile

FROM node:14-alpine AS builder

WORKDIR /frontend
COPY . ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

RUN npm run build

# start server  
CMD [ "npm","run","start" ]