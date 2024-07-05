import {auth} from "@/auth";


export default async function PrivateRoute() {
    const session = await auth();
    const user = session?.user;


    return (
        <>
            {user && <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.id}</p>
            </div>
            }
        </>
    )
}
