"use client";

import { Logo } from "@/components/logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Auth } from "./auth";

export const NavBar = () => {
    const scrolled = useScrollTop();

    return (
        <div className=
            "z-50 bg-background fixed top-0 flex items-center w-full p-6">
            <Logo width={40} height={40} />
            SillyLecture
            <Auth />
        </div>
    )
}