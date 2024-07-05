import {IconBrandGoogle} from "@tabler/icons-react";
import React from "react";
import {BottomGradient} from "@/components/SignInForm";

export default  function GoogleSignInButton() {
    return (
        <>
            <form action="">

                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                >
                    <IconBrandGoogle className="h-5 w-5 text-neutral-800 dark:text-blue-700"/>
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
                    <BottomGradient/>
                </button>
            </form>
        </>
    )
}
