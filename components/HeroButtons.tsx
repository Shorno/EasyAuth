"use client";
import React from "react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {FaGithub} from "react-icons/fa";
import {SiAuthelia} from "react-icons/si";
import Link from "next/link";

export function HeroButtons() {
    return (

        <div className="m-20 flex flex-col gap-5 md:gap-12 justify-center text-center md:flex-row items-center">
            <HoverBorderGradient
                containerClassName="rounded-xl"
                as="button"
                className="dark:bg-black h-10 bg-white text-black dark:text-white flex items-center space-x-2   "
            >
                <SiAuthelia/>
                <Link href={"/auth"}>Get Started</Link>
            </HoverBorderGradient>

            <button
                className="inline-flex h-10 gap-2 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                <FaGithub/> Code
            </button>
        </div>

    );
}

