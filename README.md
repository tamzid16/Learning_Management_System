<div align="center">

# Learnspace — Learning Management System

A web-based learning portal for browsing available courses and signing in with an existing account.

![Next.js](https://img.shields.io/badge/Next.js-14.2.16-111827?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white)

</div>

---

## Overview

Learnspace is a Learning Management System built with Next.js and TypeScript. Visitors can browse courses stored in a PostgreSQL database and existing users can sign in with their credentials. The dashboard presents the course catalogue in a responsive interface with clear loading, empty and error states.

## Dashboard preview

<div align="center">

<img src="docs/screenshots/dashboard-preview.png" alt="Designed dashboard preview with navigation, course catalogue and empty state" width="100%" />

<sub>Dashboard design preview showing the course catalogue empty state. Course cards appear when course records are available in the configured database.</sub>

</div>

## Features

- **Responsive dashboard** — a redesigned workspace layout with navigation, a welcome area and a course catalogue.
- **Course catalogue** — retrieves course titles and descriptions from the application API.
- **Loading, empty and error states** — gives feedback while courses load and when the catalogue is empty or unavailable.
- **Credentials sign-in** — authenticates existing users through NextAuth.js.
- **Password hash verification** — compares submitted passwords with stored hashes using `bcryptjs`.
- **Relational data model** — Prisma models users, roles, courses, lessons and NextAuth adapter records.

> Account registration, course creation, lesson pages and course administration are not included in the current interface.

## Technology stack

| Area | Technologies |
|---|---|
| Framework | Next.js 14, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS and custom CSS |
| Authentication | NextAuth.js credentials provider |
| Password hashing | bcryptjs |
| ORM | Prisma |
| Database | PostgreSQL |
| Icons and UI | Lucide React, Radix UI and reusable UI components |

## Getting started

### Prerequisites

- Node.js 18.17 or newer
- npm
- A running PostgreSQL instance

### 1. Get the source code

```bash
git clone https://github.com/tamzid16/Learning-Management-System-V2.git
cd Learning-Management-System-V2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and set values for your environment:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/lms?schema=public"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Replace the database placeholders with your PostgreSQL credentials. Generate a unique `NEXTAUTH_SECRET` and keep the `.env` file private.

### 4. Prepare Prisma

```bash
npx prisma generate
npx prisma db push
```

The application expects existing user records to contain password hashes compatible with `bcryptjs`. There is no registration page in the current version.

### 5. Run the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```text
app/
├── api/
│   ├── auth/[nextauth]/   # NextAuth authentication endpoint
│   └── courses/           # Course catalogue endpoint
├── auth/signin/           # Sign-in page
├── components/            # Course catalogue component
├── globals.css            # Global and dashboard styles
├── layout.tsx             # Root layout and metadata
└── page.tsx               # Dashboard page
components/ui/             # Reusable interface components
hooks/                     # UI hooks
lib/prisma.ts              # Shared Prisma client
prisma/schema.prisma       # Database schema
public/                    # Static assets
docs/screenshots/          # Dashboard preview and interface images
```

---

<div align="center">

Built with Next.js, TypeScript and PostgreSQL.

</div>
