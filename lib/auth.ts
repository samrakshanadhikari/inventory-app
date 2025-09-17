import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface UserWithRole {
  id: string;
  email: string | null;
  name: string | null;
  role: string;
}

interface TokenWithRole {
  role?: string;
}

interface SessionWithRole {
  role?: string;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Dev Email",
      credentials: {
        email: { label: "Email", type: "text" },
        role: { label: "Role", type: "text" }
      },
      async authorize(creds) {
        const email = (creds?.email || "").toString().toLowerCase();
        const roleInput = (creds?.role || "").toUpperCase();
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;
        if (roleInput && roleInput !== user.role) return null;
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) { 
      if (user) {
        (token as TokenWithRole).role = (user as UserWithRole).role;
      }
      return token; 
    },
    async session({ session, token }) { 
      (session as SessionWithRole).role = (token as TokenWithRole).role; 
      return session; 
    },
  },
  pages: { signIn: "/auth/signin" },
};
