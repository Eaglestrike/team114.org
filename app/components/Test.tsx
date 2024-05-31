"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {string} from "prop-types";


export default function TextMove({text1,text2}:{text1:string,text2:string}) {
    return (
        <div className={"flex flex-col sm:flex-row h-96 gap-x-4 sm:gap-y-4"}>
            <div className={"relative flex-1"}>
                <Image src={"/team114.jpg"} alt={"robotwork"} fill={true} style={{objectFit: 'contain'}} quality={100}/>
            </div>
            <motion.div
                className={`flex-1 max-w-xl sm:text-xl mt-4 sm:mt-0`}
                style={{justifyContent: "flex-start"}}
                initial={{x: 500}}
                whileInView={{x: 0}}
                transition={{duration: 0.3, delay: 0}}
            >
                <p className={"pt-7 mb-8 text-4xl font-bold text-left"}>{text1}</p>
                <p>{text2}</p>
            </motion.div>
        </div>
    )
}
