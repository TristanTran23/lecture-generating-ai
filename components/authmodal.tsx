import { Button } from "./ui/button";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { cn } from "@/lib/utils";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export const AuthModal = ({ searchParams }: SearchParamProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const tab = searchParams?.tab;

    const SignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        if (auth.currentUser) {
            router.push("/home")
        } else {
            toast("Sign up failed")
        }
    };

    const Login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        if (auth.currentUser) {
            router.push("/home")
        } else {
            toast("Login failed")
        }
    };

    const LogOut = async () => {
        await signOut(auth);
        router.push("/");
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-99999">
            <div className="border w-96 shadow-lg rounded-md bg-white">
                <div className="flex flex-row items-center justify-evenly">
                    <button className={cn(tab === "signup" ? "bg-primary text-black" : "bg-secondary", "w-full py-2 rounded-md text-white")} onClick={() => router.push("/?show=true&tab=signup")}>Sign Up</button>
                    <button className={cn(tab === "login" ? "bg-primary text-black" : "bg-secondary", "w-full py-2 rounded-md text-white")} onClick={() => router.push("/?show=true&tab=login")}>Login</button>
                </div>
                <div id="London" className="tabcontent">
                    <h3>London</h3>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Paris" className="tabcontent">
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Tokyo" className="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
            </div>
            <Toaster />
        </div>
    )
}