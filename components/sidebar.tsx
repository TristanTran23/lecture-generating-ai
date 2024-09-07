import { Logo } from "./logo"

export const SideBar = () => {
    return (
        <>
        <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[999999]"> 
            <div className="flex flex-row items-center justify-items-start">
            <Logo width={50} height={50} />
            <h1 className="text-2xl font-bold ">SillyLecture</h1>
            </div>
        </aside>
        </>
    )
}