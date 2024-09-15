"use client";

import { Logo } from "@/components/logo";
import { SignInButton } from "./signup";

export const NavBar = () => {
    return (
        <div className="z-50 bg-background fixed flex items-center w-full p-6">
            <Logo width={40} height={40} />
            <h1 className="text-xl font-bold ">SillyLecture</h1>
            <SignInButton />
        </div>
    )
}