# Sodemy - Learning Platform

A full-stack learning platform built with Next.js, Prisma, and MongoDB.

## Prisma Setup Guide

Follow these steps to properly set up Prisma in your Next.js application:

### 1. Install Prisma

```bash
npm install prisma --save-dev
npm install @prisma/client
```

### 2. Initialize Prisma

```bash
npx prisma init
```

This will create a `prisma` directory with a `schema.prisma` file and a `.env` file.

### 3. Configure the Database Connection

Edit the `.env` file to set your database connection string:

```
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority"
```

### 4. Define Your Schema

Edit the `prisma/schema.prisma` file to define your database schema. Here's an example:

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String   @unique
  password  String?
  role      String   @default("student")
  image     String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  courses   Course[]
}

model Course {
  id              String    @id @default(auto()) @map("_id") @db.ObjectId
  title           String
  description     String?
  price           Float     @default(0)
  thumbnail       String?
  category        String?
  instructorId    String    @db.ObjectId
  instructor      User      @relation(fields: [instructorId], references: [id])
  status          String    @default("draft")
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  chapters        Chapter[]
}

model Chapter {
  id          String    @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String?
  courseId    String    @db.ObjectId
  course      Course    @relation(fields: [courseId], references: [id])
  order       Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  lessons     Lesson[]
}

model Lesson {
  id          String    @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String?
  chapterId   String    @db.ObjectId
  chapter     Chapter   @relation(fields: [chapterId], references: [id])
  order       Int       @default(0)
  videoUrl    String?
  duration    Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

### 5. Generate the Prisma Client

```bash
npx prisma generate
```

This command generates the Prisma Client based on your schema.

### 6. Create a Singleton Instance

Create a file at `lib/prisma.ts` with the following content:

```typescript
import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### 7. Push the Schema to the Database

```bash
npx prisma db push
```

This command pushes your schema to the database.

### 8. (Optional) Seed the Database

Create a seed script in `prisma/seed.ts` and run it with:

```bash
npx prisma db seed
```

### 9. Use the Prisma Client in Your Application

Import the Prisma client in your API routes and server components:

```typescript
import { prisma } from "@/lib/prisma";

// Example: Get all users
const users = await prisma.user.findMany();
```

## Troubleshooting

If you encounter the error "@prisma/client did not initialize yet", try the following:

1. Make sure you've run `npx prisma generate`
2. Restart your development server
3. Clear your Next.js cache: `rm -rf .next`
4. Make sure you're using the singleton pattern for the Prisma client

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables in `.env`
4. Run Prisma setup: `npx prisma generate`
5. Start the development server: `npm run dev`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
