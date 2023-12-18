FROM node:18-alpine

WORKDIR /react-app-sms/

COPY public/ /react-app-sms/public
COPY src/ /react-app-sms/src
COPY package.json /react-app-sms/


RUN npm install
CMD ["npm", "start"]
