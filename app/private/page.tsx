import {auth} from "@/auth";


export default async function PrivateRoute() {
    const session = await auth();
    console.log(session)


    return (
        <>
            <div>
                <h1>Private Route</h1>

            </div>
        </>
    )
}
