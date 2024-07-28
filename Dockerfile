
FROM node

EXPOSE 3000

COPY . ./app
WORKDIR /app/frontend

ENV REACT_APP_frontendURL="https://redanews.onrender.com"

RUN corepack enable
RUN yarn install --frozen-lockfile
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "-n", "build"]






