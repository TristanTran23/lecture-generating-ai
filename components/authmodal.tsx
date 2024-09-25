import { Button } from "./ui/button";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export const AuthModal = ( ) => {
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

    const LogOut = async () => {
        await signOut(auth);
        router.push("/");
    }


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-99999">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
                        <div className="mt-2 px-7 py-3">
                            <p className="text-lg text-gray-500">Modal Body</p>
                        </div>
                    <div className="flex justify-center mt-4">
                        <button
                        onClick={router.back}
                        className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}