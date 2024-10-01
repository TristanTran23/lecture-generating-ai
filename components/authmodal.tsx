import { Button } from "./ui/button";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const AuthModal = () => {
    const [email, setEmail] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const tab = useSearchParams().get("tab");
    const { toast } = useToast();

    const SignUp = async () => {
        if (password === checkPassword) {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push("/home")
            }).catch((error) => {
                toast({
                    title: "Sign up failed",
                    description: error.message,
                })
            })
        } else {
            toast({
                title: "Sign up failed",
                description: "Passwords do not match",
            })
            setPassword("");
            setCheckPassword("");
        };
    }

    const Login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            router.push("/home")
        }).catch((error) => {
            toast({
                title: "Login failed",
                description: error.message,
            })
        })
    };

    const LogOut = async () => {
        await signOut(auth);
        router.push("/");
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-99999">
            {(tab=="logout") &&
            <div className="border w-96 shadow-lg rounded-md bg-white">
                <div className="flex flex-col p-3">
                    <h2>Are you sure you want to log out?</h2>
                    <div className="flex flex-row items-end justify-end mt-2">
                        <Button className="mr-2" onClick={LogOut}>Confirm</Button>
                        <Button variant="secondary" onClick={() => router.push("/")}>Cancel</Button>
                    </div>
                </div>
            </div>
            ||
            <div className="border w-96 shadow-lg rounded-md bg-white">
                <div className="flex flex-row items-center justify-evenly">
                    <button className={cn(tab === "signup" ? "bg-primary text-white" : "bg-secondary text-black", "w-full py-2 rounded-md")} onClick={() => router.push("/?show=true&tab=signup")}>Sign Up</button>
                    <button className={cn(tab == "login" ? "bg-primary text-white" : "bg-secondary text-black", "w-full py-2 rounded-md")} onClick={() => router.push("/?show=true&tab=login")}>Login</button>
                </div>
                {(tab==="signup") &&
                <div className="flex flex-col p-3">
                    <h2>Sign up with your email</h2>
                    <input type="text" placeholder="Email" className="w-80% p-2 border-2 rounded-md border-gray-300 focus:border-primary focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
                    <h2>Password</h2>
                    <input type="password" placeholder="Password" className="w-full p-2 border-2 rounded-md border-gray-300 focus:border-primary focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                    <h2>Confirm password</h2>
                    <input type="password" placeholder="Password" className="w-full p-2 border-2 rounded-md border-gray-300 focus:border-primary focus:outline-none" onChange={(e) => setCheckPassword(e.target.value)} />
                    <div className="flex flex-row items-end justify-end mt-2">
                        <Button className="mr-2" onClick={SignUp}>Sign up</Button>
                        <Button variant="secondary" onClick={() => router.push("/")}>Cancel</Button>
                    </div>
                </div>}
                {(tab==="login") &&
                <div className="flex flex-col p-3">
                    <h2>Login with your email</h2>
                    <input type="text" placeholder="Email" className="w-80% p-2 border-2 rounded-md border-gray-300 focus:border-primary focus:outline-none" onChange={(e) => setEmail(e.target.value)} />
                    <h2>Password</h2>
                    <input type="password" placeholder="Password" className="w-full p-2 border-2 rounded-md border-gray-300 focus:border-primary focus:outline-none" onChange={(e) => setPassword(e.target.value)} />
                    <div className="flex flex-row items-end justify-end mt-2">
                        <Button className="mr-2" onClick={Login}>Login</Button>
                        <Button variant="secondary" onClick={() => router.push("/")}>Cancel</Button>
                    </div>
                </div>}
            </div>
            }
        </div>
    )
}