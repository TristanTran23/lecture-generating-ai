"use client";

import { NavBar } from "@/components/navbar";
import { SideBar } from "@/components/sidebar";

const HomeLayout =({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex">
            <SideBar />
            <main className="flex-1 overflow-y-auto h-full">
                {children}
            </main>
        </div>
    )
}

export default HomeLayout;