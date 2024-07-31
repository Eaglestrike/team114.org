"use client"
import React from "react";
import Image from "next/image";
import {leads, captains} from "@/app/data/leads";

export default function Meet() {
    return (
        <div className={"bg-slate-900 p-y-10"}>
            <p className={"text-white text-6xl text-left font-semibold p-7"}>Meet Team114</p>
            <p className={'pt-10 pb-8 text-white text-center text-5xl'}>Captains</p>
            <div className={"w-screen grid grid-cols-4 gap-3 p-4 justify-items-center"}>
                <div></div>
                {captains.map((captain, index) => (
                    <div className={"bg-slate-600 rounded-3xl justify-items-center p-4"} key={index}>
                        <div className={'lg:h-52 m:h-32 sm:h-20 aspect-square relative'}>
                            <Image fill={true} src={captain.image} alt={"captain"}
                                   className={"object-contain aspect-square rounded-2xl"} quality={100}/>
                        </div>
                        <div className={'bg-gray-20 text-center text-white text-2xl m-1'}>{captain.name}</div>
                    </div>
                ))}
                <div></div>
            </div>
            <p className={'pt-10 pb-8 text-white text-center text-5xl'}>Leads</p>
            <div className={"w-screen grid grid-cols-4 gap-x-6 gap-y-8 justify-items-center pb-10"}>
                {leads.map((lead, index) => (
                    <div className={"bg-slate-500 rounded-3xl justify-items-center p-4"} key={index}>
                        <div className={'lg:h-52 m:h-32 sm:h-20 aspect-square relative'}>
                            <Image fill={true} src={lead.image} alt={lead.role}
                                   className={"object-contain aspect-square rounded-3xl"} quality={100}/>
                        </div>
                        <div className={'bg-gray-20 text-center text-white lg:text-xl sm:text-m m-1'}>{lead.role}:</div>
                        <div className={'bg-gray-20 text-center text-white lg:text-2xl sm:text-lg'}>{lead.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
