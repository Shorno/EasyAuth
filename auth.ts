import NextAuth from "next-auth"
import prisma from "@/prisma/db";
import {PrismaAdapter} from "@auth/prisma-adapter";
import GitHub from "@auth/core/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
})
