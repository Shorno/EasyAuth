"use server"
import {signOut} from "@/auth";

export async function GitHubSignOut() {
    return signOut()
}
