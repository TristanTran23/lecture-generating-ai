import { Logo } from "./logo"

export const SideBar = () => {
    return (
        <>
        <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[999999]"> 
            <Logo width={50} height={50} />
            Sidebar
        </aside>
        </>
    )
}