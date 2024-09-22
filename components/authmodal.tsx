import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

export const AuthModal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const SignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        if (auth.currentUser) {
            router.push("/home")
        } else {
            alert("Sign up failed")
        }
    };

    const Login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        if (auth.currentUser) {
            router.push("/home")
        } else {
            alert("Login failed")
        }
    };


    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Sign Up</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Sign Up</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Sign up with your email and password to continue.
                    </DialogDescription>
                    <DialogHeader>
                        <input className="border-2 border-black rounded-sm" type="text" placeholder="Email..."  onChange={(e) => setEmail(e.target.value)}/>
                    </DialogHeader>
                    <DialogHeader>
                        <input className="border-2 border-black rounded-sm" type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                    </DialogHeader>
                    <DialogClose className="flex justify-end p-2">
                        <Button variant="secondary">Cancel</Button>
                        <Button onClick={SignUp}>Sign Up</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary">Log In</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Log In</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Log in with your email and password to continue.
                    </DialogDescription>
                    <DialogHeader>
                        <input className="border-2 border-black rounded-sm" type="text" placeholder="Email..."  onChange={(e) => setEmail(e.target.value)}/>
                    </DialogHeader>
                    <DialogHeader>
                        <input className="border-2 border-black rounded-sm" type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                    </DialogHeader>
                    <DialogClose className="flex justify-end p-2">
                        <Button variant="secondary">Cancel</Button>
                        <Button onClick={Login}>Log In</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    )
}