# Clicktran Platform

A full-stack Linktree-style platform with QR business cards.

## Architecture

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + Prisma
- **Database**: PostgreSQL (via Docker)

## Setup

1. **Start PostgreSQL**:
   ```bash
   cd clicktran-platform
   docker compose up -d
   ```

2. **Initialize Database**:
   ```bash
   cd backend
   npx prisma migrate dev --name init
   ```

3. **Seed Database**:
   ```bash
   cd backend
   npm run seed
   ```

4. **Start Backend**:
   ```bash
   cd backend
   npm start
   ```
   API at http://localhost:4000

5. **Start Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```
   UI at http://localhost:3000

## Test URLs

- Home: http://localhost:3000
- Demo Profile: http://localhost:3000/demo
- Dashboard: http://localhost:3000/dashboard (add links, view QR)
- Dynamic Profile: http://localhost:3000/creator (fetches from DB, tracks clicks)

### Authentication (placeholder)
This starter includes **UI for login and signup** with modern buttons and a Google sign-in styling. The forms are stubs – the buttons currently log a message and do not communicate with a backend. You can hook them up to your chosen auth service (OAuth, JWT, etc.) later.

Use the navigation bar for access:
- http://localhost:3000/login
- http://localhost:3000/signup

## Features

- Public profile pages with dynamic routing
- Creator dashboard for adding links and viewing existing ones
- QR code business card pointing to profile URL
- Click tracking on links
- PostgreSQL schema with User/Link models</content>
<parameter name="filePath">c:\Users\srees\OneDrive\Projects\linktree\clicktran-platform\README.md