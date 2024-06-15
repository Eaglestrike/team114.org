"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {string} from "prop-types";


export default function TextMove({image, text1, text2, side}:{image:string, text1:string,text2:string, side:string}) {
    if (side === "right"){
    return (
        <div className={"flex flex-col sm:flex-row w-screen p-20 h-full"}>
            <div className={"relative flex-1"}>
                <Image src={image} alt={"image"} fill={true} style={{objectFit: 'contain'}} quality={90} className={"drop-shadow-2xl rounded-3xl"}/>
            </div>
            <div
                className={`flex flex-row flex-1 grid-cols-1`}
                style={{justifyContent: "flex-start"}}
            >
                <div className={"mx-9 flex items-center justify-center"}>
                    <motion.div className={"lg:pb-52 sm:pb-3"}
                                initial={{x: 100}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.4, delay: 0, once: true}}>
                        <p className={"grow mb-8 text-6xl font-bold text-left text-slate-100"}>{text1}</p>
                        <p className={"text-slate-100 text-2xl place-self-center"}>{text2}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )}
    else if (side === "left"){
        return (
            <div className={"flex flex-col sm:flex-row w-screen p-20 h-screen"}>
                <div
                    className={`flex flex-row flex-1 grid-cols-1`}
                    style={{justifyContent: "flex-start"}}
                >
                    <div className={"mx-9 flex items-center justify-center"}>
                        <motion.div className={"lg:pb-52 sm:pb-3"}
                                    initial={{x: -100}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.4, delay: 0, once: true}}>
                            <p className={"grow mb-8 text-6xl font-bold text-left text-slate-100"}>{text1}</p>
                            <p className={"text-slate-100 text-2xl place-self-center"}>{text2}</p>
                        </motion.div>
                    </div>
                </div>
                <div className={"relative flex-1"}>
                    <Image src={image} alt={"image"} fill={true} style={{objectFit: 'contain'}} quality={90}
                           className={"drop-shadow-2xl rounded-3xl"}/>
                </div>
            </div>
        )
    }

}
