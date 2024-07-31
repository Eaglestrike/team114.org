"use client"
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {string} from "prop-types";


export default function TextMove({image, text1, text2, side}:{image:string, text1:string,text2:string, side:string}) {
    if (side === "right"){
    return (
        <div className={"flex flex-col sm:flex-row w-screen h-full py-2"}>
            <div className={"relative flex-1 w-full bg-red-400"}>
                <Image src={image} alt={"image"} fill={true}
                       className={"object-contain drop-shadow-2xl rounded-3xl"} quality={90}
                       />
            </div>
            <div
                className={`flex flex-row flex-1 grid-cols-1`}
                style={{justifyContent: "flex-start"}}
            >
                <div className={"mx-9 flex w-fill items-center justify-center"}>
                    <motion.div className={"lg:pb-52 sm:pb-3"}
                                initial={{x: 100}}
                                whileInView={{x: 0}}
                                transition={{duration: 0.4, delay: 0, once: true}}>
                        <p className={"grow mb-8 text-5xl font-bold text-left text-slate-100 underline underline-offset-8 decoration-4"}>{text1}</p>
                        <p className={"text-slate-100 text-2xl place-self-center"}>{text2}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )}
    else if (side === "left"){
        return (
            <div className={"flex flex-col sm:flex-row w-screen h-full py-2"}>
                <div
                    className={`flex flex-row flex-1 grid-cols-1`}
                    style={{justifyContent: "flex-start"}}
                >
                    <div className={"mx-9 flex w-fill items-center justify-center"}>
                        <motion.div className={"lg:pb-52 sm:pb-3"}
                                    initial={{x: -100}}
                                    whileInView={{x: 0}}
                                    transition={{duration: 0.4, delay: 0, once: true}}>
                            <p className={"grow mb-8 text-5xl font-bold text-left text-slate-100 underline underline-offset-8 decoration-4"}>{text1}</p>
                            <p className={"text-slate-100 text-2xl place-self-center"}>{text2}</p>
                        </motion.div>
                    </div>
                </div>
                <div className={"relative flex-1 w-full"}>
                    <Image src={image} alt={"image"} fill={true}
                           className={"object-contain drop-shadow-2xl rounded-2xl"} quality={90}
                           />
                </div>
            </div>
        )
    }

}
