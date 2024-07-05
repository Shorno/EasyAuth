import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import GitHub from "@auth/core/providers/github";
import prisma from "@/prisma/db";


export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],

    callbacks: {
        //fixing for next-auth
        async session({session, user}: any) {
            if (session && user) {
                session.user.id = user.id
            }
            return session;
        }
    }
})
