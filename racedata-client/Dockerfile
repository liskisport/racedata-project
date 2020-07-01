# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /racedata-client

# install app dependencies
COPY package*.json ./

RUN npm install

# add `/racedata-client/node_modules/.bin` to $PATH
ENV PATH /racedata-client/node_modules/.bin:$PATH

# add app
COPY . ./

# start app
CMD npm run dev