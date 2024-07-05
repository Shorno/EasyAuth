import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import GitHub from "@auth/core/providers/github";
import {Adapter} from "@auth/core/adapters";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()


export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: <Adapter>PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
})
