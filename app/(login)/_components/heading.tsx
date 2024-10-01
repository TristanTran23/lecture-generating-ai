"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";


export const Heading = () => {
    const user = auth.currentUser;
    const router = useRouter();

    const EnterMain = () => {
        (!!user) ? router.push("/home") : router.push("/?show=true&login=true");
    }

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                SillyLecture
            </h1>
            <div className="flex items-center justify-center">
                <Logo width={100} height={100} />
            </div>
            <Button size="default" onClick={EnterMain}>
                    Enter SillyLecture
                    <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
    )
}