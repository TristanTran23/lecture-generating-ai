"use client";

import { NavBar } from "@/components/navbar";

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
        </div>
    )
}

export default LoginLayout;