"use client";

import { AuthModal } from "@/components/authmodal";
import { Heading } from "./_components/heading";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
    const show = useSearchParams().get("show");

    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                <Heading />
            </div>
            {show && <AuthModal />}
        </div>
    )
}

export default LoginPage;