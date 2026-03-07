# Clicktran Starter Kit

This repository contains a full-stack Linktree-style platform with:

- **Next.js frontend** (TypeScript, Tailwind, App Router)
- **Node.js/Express backend** written in TypeScript
- **SQLite** by default for local development (schema defined with Prisma)
- Option for **PostgreSQL** (docker-compose included)
- **Prisma ORM** for database access
- JWT-based authentication
- Link management API
- Click tracking analytics
- QR code generation
- Docker & Docker Compose configuration for easy deployment

## Structure

```
clicktran-ui/
├── backend/            # Express API server
│   ├── src/
│   ├── prisma/         # schema & migrations
│   ├── Dockerfile
│   └── package.json
├── frontend/           # Next.js application
│   ├── src/app/        # pages and layout
│   ├── src/components/
│   └── Dockerfile
├── docker-compose.yml  # brings up postgres + services
└── README.md
```

## Getting Started (Frontend + Backend)

### Prerequisites
- Node.js 18+ (npm 9+)
- Git
- Docker *optional* (for PostgreSQL)

### Local development (SQLite)

1. Open two terminals.
2. **Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   The API runs on http://localhost:4000.
   Alternatively you can open the `Start Backend` VS Code task (in the Run/Tasks pane).
4. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open http://localhost:3000 in your browser.
   You can also run the `Start Frontend` VS Code task.

4. Use the UI to register/login under `/auth/register` or `/auth/login`.
   The dashboard page will load links from the API and allow adding/deleting.

### Switching to PostgreSQL (Docker)

1. Ensure Docker Desktop is running.
2. In the project root run:
   ```bash
   docker-compose up -d
   ```
   This starts a Postgres instance on port 5432.
3. Update `backend/.env` with:
   ```env
   DATABASE_URL=postgresql://clicktran:clicktran@localhost:5432/clicktran
   JWT_SECRET=supersecret
   ```
4. Apply migrations against Postgres:
   ```bash
   cd backend
   npx prisma migrate deploy   # or `migrate dev` if you prefer
   ```
5. Rebuild the backend image or restart the server if necessary.

> **Note:** the Prisma schema is currently configured for SQLite by default; if
> you switch to Postgres you must change the `datasource` block to
> `provider = "postgresql"` and set `DATABASE_URL` accordingly. The existing
> migration files under `backend/migrations` will run against the new database.

### Building & Docker

From project root:

```bash
# build images
docker-compose build
# bring up everything
docker-compose up
```

The frontend will be available at http://localhost:3000 and the API at
http://localhost:4000.

## Features to Explore

- Public profile page: `/demo`
- Creator dashboard with link management: `/dashboard`
- QR business card generator
- Authentication and protected routes
- Link click tracking API (`POST /api/links/:id/click`)

## Next Steps

- Add analytics dashboards using the `Click` model.
- Enhance UI with better styling and mobile responsiveness.
- Integrate real file storage for avatars.
- Add user settings, themes, and preview links.
- Deploy to your OVH VPS or any cloud provider using the provided Docker
  configuration.

Feel free to extend this starter kit however you need – it’s meant to be a
launching point for a production‑ready Linktree competitor.
