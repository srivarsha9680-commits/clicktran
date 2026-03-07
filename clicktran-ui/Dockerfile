# Build frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /frontend
COPY clicktran-ui/frontend/package*.json clicktran-ui/frontend/tsconfig.json ./
RUN npm install
COPY clicktran-ui/frontend/ .
RUN npm run build

# Build backend
FROM node:18-alpine AS backend-builder
WORKDIR /backend
COPY clicktran-ui/backend/package*.json clicktran-ui/backend/tsconfig.json ./
COPY clicktran-ui/backend/prisma ./prisma
RUN npm install
RUN npx prisma generate
COPY clicktran-ui/backend/src ./src
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app

# Install serve for frontend
RUN npm install -g serve

# Copy backend
COPY --from=backend-builder /backend/package*.json ./
COPY --from=backend-builder /backend/dist ./backend/dist
COPY --from=backend-builder /backend/node_modules ./backend/node_modules
COPY --from=backend-builder /backend/prisma ./backend/prisma

# Copy frontend build
COPY --from=frontend-builder /frontend/.next ./frontend/.next
COPY --from=frontend-builder /frontend/public ./frontend/public
COPY --from=frontend-builder /frontend/package*.json ./frontend/

# Copy environment files
COPY clicktran-ui/backend/.env ./backend/.env

# Expose port
EXPOSE 4000

# Start both services
CMD ["sh", "-c", "cd backend && node dist/server.js & cd frontend && npm start & wait"]