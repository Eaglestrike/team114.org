import React from "react";
import Image from "next/image";


export default function Carousel () {
    const sources = [
        {description: "Robot", image: "/2024SFR-091.jpg"},
        {description: "sus robot", image: "/Z62_8567.jpg"},
        {description: "Climb", image: "/Z62_8742.jpg"},
    ];

    return(
            <div className={"border-y-3 border-x-8 p-2 border-white justify-self-center w-full bg-slate-100 overflow-x-auto scroll snap-x snap-always snap-mandatory snap-center flex flex-1 rounded-xl"}>
                {sources.map((source,index) => (
                    <div className={"snap-center mx-2 w-1/2 flex-none"} key={index}>
                        <Image height='4024' width='6048' src={"/team_pics" + source.image} alt={source.description}
                               className={"object-cover rounded-2xl"} quality={80}/>
                    </div>
                ))}
            </div>
    )
}
