"use client";

import { AuthModal } from "@/components/authmodal";
import { Heading } from "./_components/heading";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

const LoginPage = ( { searchParams }: SearchParamProps) => {
    const show = searchParams?.show;

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