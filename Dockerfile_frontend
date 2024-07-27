
FROM node

EXPOSE 3000

COPY . ./app
WORKDIR /app/frontend

RUN corepack enable
RUN yarn install
RUN yarn build
RUN yarn global add serve

CMD ["server", "-s", "build"]

