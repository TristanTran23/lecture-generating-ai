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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";


export const SignInButton = ({title}: {title:string} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >{title}</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
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
        </div>
    )
}