# ---------- Build Frontend ----------
FROM node:18-alpine AS frontend-builder
WORKDIR /frontend

COPY clicktran-ui/frontend/package*.json ./
RUN npm install

COPY clicktran-ui/frontend/ .

RUN npm run build


# ---------- Build Backend ----------
FROM node:18-alpine AS backend-builder
WORKDIR /backend

COPY clicktran-ui/backend/package*.json ./
RUN npm install

COPY clicktran-ui/backend/prisma ./prisma
RUN npx prisma generate

COPY clicktran-ui/backend/src ./src

RUN npm run build


# ---------- Production ----------
FROM node:18-alpine
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy backend
COPY --from=backend-builder /backend ./backend

# Copy frontend build
COPY --from=frontend-builder /frontend/.next ./frontend/.next
COPY --from=frontend-builder /frontend/public ./frontend/public
COPY --from=frontend-builder /frontend/package*.json ./frontend/

# Install frontend production dependencies
WORKDIR /app/frontend
RUN npm install --production

# Expose port
EXPOSE 4000

# Start services
CMD ["sh", "-c", "cd /app/backend && node dist/server.js & cd /app/frontend && npm start"]