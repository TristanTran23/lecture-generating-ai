import { NavBar } from "@/components/navbar";

const HomeLayout =({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <NavBar />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default HomeLayout;