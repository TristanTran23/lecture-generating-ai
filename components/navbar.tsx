"use client";

import { Logo } from "@/components/logo";
import { AuthModal } from "./authmodal";

export const NavBar = () => {
    return (
        <div className="z-50 bg-background fixed flex items-center w-full p-6">
            <Logo width={40} height={40} />
            <h1 className="text-xl font-bold ">SillyLecture</h1>
            <div className="ml-auto justify-end w-full flex items-center gap-x-4">
            <AuthModal />
            </div>
        </div>
    )
}