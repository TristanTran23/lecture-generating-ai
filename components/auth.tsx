import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { auth } from "@/config/firebase";
import { Button } from "./ui/button";

export const Auth = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Login</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Please enter your email and password to login.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
            </DialogContent>
        </Dialog>
    )
}