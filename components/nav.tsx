import Link from "next/link";
import {SiAuthelia} from "react-icons/si";


export default function Nav() {
    return (
        <>
            <nav className={"absolute top-0 w-full z-50 bg-black"}>
                <div className={"container py-3 px-8  max-w-6xl  mx-auto"}>
                    <ul className={"flex justify-between"}>
                        <Link
                            className={"flex items-center gap-2 font-bold"}
                            href={"/"}>
                            <SiAuthelia size={30} fill={"lightblue"}/>
                            Easy Auth
                        </Link>

                        <div className={"flex gap-5"}>
                            <li>
                                Sign Up
                            </li>
                            <li>
                                Sign In
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>

        </>
    )
}


