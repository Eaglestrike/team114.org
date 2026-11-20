import React from "react";
import Image from "next/image"

import Link from "next/link";

type Robot = {
    name: string;
    image?: string; // leave out to show a blank placeholder
    highlights?: React.ReactNode;
};

type Season = {
    year: number;
    game: string;
    // Game logo, plus the optional "presented by" sponsor line shown smaller underneath
    logo: { src: string; width: number; height: number };
    sponsor?: { src: string; width: number; height: number; alt: string };
    robots: Robot[];
};

// Add a new season (or another robot for a season) here.
const seasons: Season[] = [
    {
        year: 2026,
        game: 'REBUILT presented by Haas',
        logo: { src: '/rebuilt_wordmark.png', width: 1400, height: 353 },
        sponsor: { src: '/rebuilt_haas.png', width: 879, height: 149, alt: 'Presented by Haas' },
        robots: [
            {
                name: 'Inertia',
                image: '/inertia_red.png',
                highlights: (
                    <span>
                        Finalist at{' '}
                        <Link href="https://www.thebluealliance.com/team/114/2026" className="text-blue-400 hover:text-blue-300 hover:underline">
                            SF District
                        </Link>{' '}
                        · 2× Autonomous Award
                    </span>
                ),
            },
        ],
    },
    {
        year: 2025,
        game: 'REEFSCAPE presented by Haas',
        logo: { src: '/reefscape_wordmark.png', width: 1400, height: 302 },
        sponsor: { src: '/reefscape_haas.png', width: 845, height: 143, alt: 'Presented by Haas' },
        robots: [
            { name: 'Theseus', image: '/theseus.webp' },
        ],
    },
    {
        year: 2024,
        game: 'CRESCENDO presented by Haas',
        logo: { src: '/crescendo_wordmark.png', width: 1400, height: 561 },
        sponsor: { src: '/crescendo_haas.png', width: 621, height: 106, alt: 'Presented by Haas' },
        robots: [
            {
                name: 'Snoopy',
                image: '/robot shadow.png',
                highlights: (
                    <span>
                        #1 Rank at{' '}
                        <Link href="https://www.thebluealliance.com/event/2024casf" className="text-blue-400 hover:text-blue-300 hover:underline">
                            SFR
                        </Link>{' '}
                        &{' '}
                        <Link href="https://www.thebluealliance.com/event/2024idbo" className="text-blue-400 hover:text-blue-300 hover:underline">
                            Idaho
                        </Link>
                    </span>
                ),
            },
        ],
    },
];

export default function HistoryPage() {
    return (
        <div className="bg-slate-900 min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-16 border-b border-slate-700 pb-6">
                    History
                </h1>

                <div className="flex flex-col gap-16">
                    {seasons.map((season) => (
                        <section key={season.year} className="bg-slate-800 rounded-xl shadow-lg p-6 md:p-10">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={season.logo.src}
                                    alt={season.game}
                                    width={season.logo.width}
                                    height={season.logo.height}
                                    className="h-auto w-full max-w-2xl"
                                    priority
                                />
                                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                                    <p className="text-white font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs">{season.year} Season</p>
                                    {season.sponsor && (
                                        <>
                                            <span className="text-slate-500" aria-hidden>·</span>
                                            <Image
                                                src={season.sponsor.src}
                                                alt={season.sponsor.alt}
                                                width={season.sponsor.width}
                                                height={season.sponsor.height}
                                                className="h-auto w-40 md:w-48"
                                            />
                                        </>
                                    )}
                                </div>
                            </div>

                            {season.robots.length > 0 && (
                            <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
                                {season.robots.map((robot) => (
                                    <div
                                        key={robot.name}
                                        className="w-full md:w-[calc(50%-1rem)] bg-slate-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-900/20 hover:shadow-xl"
                                    >
                                        <div className="relative aspect-square bg-slate-950">
                                            {robot.image && (
                                            <Image
                                                src={robot.image}
                                                alt={`${robot.name} - our ${season.year} robot`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-contain"
                                            />
                                            )}
                                        </div>
                                        <div className="p-5 text-center">
                                            <h3 className="text-white text-2xl font-semibold">{robot.name}</h3>
                                            {robot.highlights && <p className="text-slate-400 mt-1">{robot.highlights}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

// import Robo3d from '@/app/components/Robo3d'
// return (
// 	<div className="w-screen bg-slate-800 flex flex-row">
// 			<Robo3d/>
//
// 		<div className="w-1/2 ml-1/2 flex flex-col">
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 			<div className="py-24 px-10">amogus</div>
// 		</div>
// 	</div>
// );
