import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prisma"
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" , placeholder: "Email" },
        password: { label: "Password", type: "password" , placeholder: "Password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);  
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log("user", user)

        if (!user || !user.hashedPassword) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (isValid) {
    return {
      id: user.id.toString(), // Convert number to string
      email: user.email,
      name: user.fullName, // NextAuth typically expects 'name' not 'fullName'
      // Don't return sensitive data like hashedPassword
    };
  }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // Optional custom login page
  },
            

}


