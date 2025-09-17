import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const counts = {
    users: await prisma.user.count(),
    vendors: await prisma.vendor.count(),
    assets: await prisma.asset.count(),
    checkouts: await prisma.checkout.count(),
  };
  return new Response(JSON.stringify(counts), {
    headers: { "content-type": "application/json" },
  });
}
