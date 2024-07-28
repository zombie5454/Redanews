FROM node

EXPOSE 4000

COPY . ./app
WORKDIR /app/backend

RUN corepack enable
RUN yarn install

CMD ["yarn", "start"]





