"use client";

import { Logo } from "@/components/logo";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";


export const NavBar = () => {
    const user = auth.currentUser;
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <div className="bg-background fixed flex items-center w-full p-6">
            <Logo width={40} height={40} />
            <h1 className="text-xl font-bold ">SillyLecture</h1>
            {!!!user && (
                <div className="ml-auto justify-end w-full flex items-center gap-x-4">
                    <Button onClick={() => router.push("/?show=true&tab=signup")}>Sign Up</Button>
                    <Button variant="secondary" onClick={() => router.push("/?show=true&tab=login")}>Login</Button>
                </div>) ||
                <div className="ml-auto justify-end w-full flex items-center gap-x-4"> 
                    <Button variant="secondary" onClick={() => router.push("/?show=true&tab=logout")}>Log out</Button>
                </div>
            }
        </div>
    )
}