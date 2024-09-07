"use client";

import { Logo } from "@/components/logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

export const NavBar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo width={40} height={40} />
            SillyLecture
        </div>
    )
}