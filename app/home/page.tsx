"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";


const HomePage = () => {

    const user = auth.currentUser;
    const router = useRouter();

    if (!user) {
        router.push("/");
    }
    
    return (
        <div className="min-h-full flex flex-col">
            Home
        </div>
    )
}

export default HomePage;