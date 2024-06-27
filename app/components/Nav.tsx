"use client"
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

export default function Nav() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [y,setY] = useState(0);
    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setY(-100);
            } else {
                setY(0);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);

    return(
        <motion.div
            className={'w-screen fixed bg-slate-900 z-40 border-b-2'}
            animate={{y}}
            transition={{ ease: "easeOut", duration: 0.7 }}
        >
            <nav
                className={
                    'flex flex-row justify-end gap-x-5 text-white p-4 bg-slate-800 bg-opacity-95 uppercase font-semibold border-slate-400'
                }
            >

                <a href="/" className={"hover:text-sky-300 hover:font-extrabold"}>Home</a>
                <a href="/about" className={"hover:text-sky-300 hover:font-extrabold"}>About</a>
                <a href="/snoopy" className={"hover:text-sky-300 hover:font-extrabold"}>Snoopy</a>
                <a href="/sponsors" className={"hover:text-sky-300 hover:font-extrabold"}>Sponsors</a>
            </nav>
        </motion.div>)
}
