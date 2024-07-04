"use client";
import React from "react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {FaGithub} from "react-icons/fa";
import {TbBrandOauth} from "react-icons/tb";

export function HeroButtons() {
    return (
        <div className="m-20 flex flex-col gap-5 md:gap-16 justify-center text-center md:flex-row">
            <HoverBorderGradient
                containerClassName="rounded-xl w-full md:w-auto"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span className={"flex justify-center items-center gap-2"}> <TbBrandOauth size={25}/> Get Started</span>
            </HoverBorderGradient>
            <button
                className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                <FaGithub/> Code
            </button>

        </div>
    );
}
