import {auth} from "@/auth";
import {GitHubSignOut} from "@/actions/github-sign-out";


export default async function PrivateRoute() {
    const session = await auth();
    const user = session?.user;
    console.log(user)


    return (
        <>
            <div className={"flex mt-24 mx-auto max-w-6xl"}>
                <h1>This is a private route</h1>
                <form action={GitHubSignOut}>
                    <button type={"submit"}>Sign Out</button>
                </form>

                {user && <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.id}</p>
                </div>
                }
            </div>
        </>
    )
}
