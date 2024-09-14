"use client";

import { Logo } from "@/components/logo";
import { SignInButton } from "./signup";
import { LogInButton } from "./login";

export const NavBar = () => {
    return (
        <div>
            <div className="z-50 bg-background fixed flex items-center  w-full p-6">
            <Logo width={40} height={40} />
            <h1 className="text-2xl font-bold ">SillyLecture</h1>
            <SignInButton title="Sign up"/>
            <LogInButton title="Log in"/>
            </div>
        </div>
    )
}