"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Image } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                This is the heading
            </h1>
            <Button className="text-xl">
                Enter
                <ArrowRight className="pl-2"/>
            </Button>
        </div>
    )
}