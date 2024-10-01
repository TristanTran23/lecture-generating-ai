"use client";

import { NavBar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const LoginLayout =({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <main className="h-full pt-40">
                {children}
            </main>
            <Toaster />
        </div>
    )
}

export default LoginLayout;