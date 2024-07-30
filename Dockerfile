FROM node

EXPOSE 4000

COPY . ./app

RUN corepack enable

ARG MONGO_URL_ARG
ARG GUARDIANS_KEY_ARG
ENV MONGO_URL=${MONGO_URL_ARG}
ENV GUARDIANS_KEY=${GUARDIANS_KEY_ARG}
ENV MODE="full-stack"
#RUN echo MONGO_URL=${MONGO_URL}
#RUN echo GUARDIANS_KEY=${GUARDIANS_KEY}

WORKDIR /app/frontend
RUN yarn install --frozen-lockfile
RUN yarn build

WORKDIR /app/backend
RUN yarn install --frozen-lockfile

CMD ["yarn", "start"]






