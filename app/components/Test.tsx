"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {string} from "prop-types";


export default function TextMove({image, text1,text2}:{image:string, text1:string,text2:string}) {
    return (
        <div className={"flex flex-col sm:flex-row w-screen h-96 my-60 snap-start snap-always"}>
            <div className={"relative flex-1 bg-red-400"}>
                <Image src={image} alt={"image"} fill={true} style={{objectFit: 'contain'}} quality={100} className={"drop-shadow-2xl"}/>
            </div>
            <motion.div
                className={`flex-1 max-w-xl sm:text-xl mt-5 sm:mt-0 bg-green-400`}
                style={{justifyContent: "flex-start"}}
                initial={{x: 500}}
                whileInView={{x: 0}}
                transition={{duration: 0.3, delay: 0}}
            >
                <p className={"pt-7 mb-8 text-4xl font-bold text-left text-slate-100"}>{text1}</p>
                <p className={"text-slate-100"}>{text2}</p>
            </motion.div>
        </div>
    )
}
