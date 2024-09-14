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
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export const LogInButton = ({title}: {title:string} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="secondary">{title}</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
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
                        <Button onClick={SignUp}>{title}</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    )
}