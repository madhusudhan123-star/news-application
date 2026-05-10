import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createClient(): PrismaClient {
  if (process.env.NODE_ENV === 'production') {
    // Edge-compatible client for Cloudflare Workers runtime
    // Requires DATABASE_URL to be a Prisma Accelerate connection string (prisma://...)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient: EdgeClient } = require('@prisma/client/edge') as { PrismaClient: typeof PrismaClient }
    return new EdgeClient().$extends(withAccelerate()) as unknown as PrismaClient
  }
  // Standard Node.js client for local development (direct PostgreSQL connection)
  return new PrismaClient()
}

const prisma = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
