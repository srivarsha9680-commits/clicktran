# Build backend
FROM node:18 AS builder
WORKDIR /app

COPY package*.json tsconfig.json ./
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY src ./src
RUN npm run build


# Production image
FROM node:18
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 4000

CMD ["node", "dist/server.js"]