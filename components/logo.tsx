import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ width, height }: { width: number, height: number }) => {
    return (
        <div className={cn("flex items-center")}>
            <Image src="/logo.svg" width={width} height={height} alt="logo" />
        </div>
    )
}