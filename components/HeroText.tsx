"use client";
import {motion} from "framer-motion";
import {HeroHighlight, Highlight} from "@/components/ui/hero-highlight";
import {HeroButtons} from "@/components/HeroButtons";


export default function HeroText() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-lg px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        EasyAuth <br/> <span className={"text-2xl sm:text-6xl"}>the modern way to build</span>
                    </h1>
                </div>
                <Highlight className="text-xl md:text-5xl">
                    fast and secure authentication
                </Highlight>
            </motion.h1>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
            >
                <HeroButtons/>
            </motion.h1>


        </HeroHighlight>
    );
}
