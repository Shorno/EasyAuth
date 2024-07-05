"use server"
import {signIn} from "@/auth";

export async function GitHubSignIn() {
    return signIn("github")
}
