import { useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    let scrolled = false;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>threshold) {
                scrolled = true;
            } else {
                scrolled = false;
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(scrolled);
}