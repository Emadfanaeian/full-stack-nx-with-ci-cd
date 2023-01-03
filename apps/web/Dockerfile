FROM  emad111/mangaapp:nx-base AS builder
WORKDIR /app/builder
COPY . .
RUN npx nx run web:build ${BUILD_FLAG}
RUN ls
WORKDIR /app/builder/dist/apps/web
CMD npm start
