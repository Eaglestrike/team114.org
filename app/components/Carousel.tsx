import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {string} from "prop-types";

export default function Carousel () {
    const sources = [
        {description: "Robot", image: "/2024SFR-091.jpg"},
        {description: "sus robot", image: "/Z62_8567.jpg"},
        {description: "Climb", image: "/Z62_8742.jpg"},
        {description: "Gang Signs", image: "/Z62_9413 (1).jpg"},
        {description: "alliance selection", image: "/Z62_9717.jpg"},

    ];

    return(
            <div className={"border-y-4 border-blue-400 justify-self-center w-screen h-f bg-slate-800 overflow-x-scroll scroll snap-x snap-always snap-mandatory flex"}>
                {sources.map((source,index) => (
                    <div className={"snap-center px-6 border-4 h-full shrink-0"} key={index}>
                        <Image height={'800'} width={'800'} src={"/team_pics"+source.image} alt={source.description}
                               className={"object-cover"} quality={100}/>
                    </div>
                ))}
            </div>
    )
}
