FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate
COPY src ./src
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY .env .env
EXPOSE 4000
CMD ["node", "dist/server.js"]
