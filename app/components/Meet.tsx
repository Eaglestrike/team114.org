"use client"
import Image from "next/image"
import { leads, captains } from "@/app/data/leads"

export default function Meet() {
    return (
        <div className="bg-slate-900 min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-16 border-b border-slate-700 pb-6">
                    Meet Team 114
                </h1>
                <section className="mb-20">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-10 relative">
                        <span className="relative inline-block">
                            Captains
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-sky-500 rounded-full"></span>
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {captains.map((captain, index) => (
                            <div
                                key={index}
                                className="bg-slate-800 flex flex-col rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-sky-900/20 hover:shadow-xl"
                            >
                                <div className="aspect-square relative h-64 md:h-72 overflow-hidden bg-slate-700">
                                    <Image
                                        fill={true}
                                        src={captain.image || "/placeholder.svg"}
                                        alt={captain.name}
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        quality={90}
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-white text-xl md:text-2xl font-semibold text-center">{captain.name}</h3>
                                    <p className="text-slate-400 text-center mt-1">Captain</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-10 relative">
                        <span className="relative inline-block">
                            Leads
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-500 rounded-full"></span>
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {leads.map((lead, index) => (
                            <div
                                key={index}
                                className="bg-slate-800 flex flex-col rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-sky-900/20 hover:shadow-xl"
                            >
                                <div className="aspect-square relative h-48 md:h-56 overflow-hidden bg-slate-700">
                                    <Image
                                        fill={true}
                                        src={lead.image || "/placeholder.svg"}
                                        alt={lead.name}
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                        quality={85}
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-sky-400 text-sm font-medium mb-1">{lead.role}</p>
                                    <h3 className="text-white text-lg md:text-xl font-semibold">{lead.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

