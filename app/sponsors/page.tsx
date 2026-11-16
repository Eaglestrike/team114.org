"use client"
import Image from "next/image"
import Link from "next/link"
import { bronzeSponsors, goldSponsors, silverSponsors } from "@/app/data/sponsorsData"

// Tiers from the Eaglestrike Sponsorship Package (public/eaglestrike_sponsorship_package.pdf)
const tiers = [
    {
        id: "gold",
        title: "Gold ($5000 or more)",
        colorClass: "text-yellow-500",
        sponsors: goldSponsors,
    },
    {
        id: "silver",
        title: "Silver ($2000 - $5000)",
        colorClass: "text-gray-400",
        sponsors: silverSponsors,
    },
    {
        id: "bronze",
        title: "Bronze (up to $2000)",
        colorClass: "text-amber-600",
        sponsors: bronzeSponsors,
    },
]

function SectionTitle({ title, colorClass }: { title: string; colorClass: string }) {
    return (
        <div className="relative py-4 mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold ${colorClass}`}>{title}</h2>
            <div className={`absolute bottom-0 left-0 h-1 w-24 ${colorClass.replace("text-", "bg-")} rounded-full`}></div>
        </div>
    )
}

function SponsorCard({
    sponsor,
    tier,
    size = "medium",
}: {
    sponsor: { name: string; logo: string; website: string }
    tier: "partner" | "gold" | "silver" | "bronze"
    size?: "small" | "medium" | "large"
}) {
    const tierStyles = {
        partner: {
            border: "hover:border-rose-600",
            scale: "hover:scale-105",
            bgHover: "hover:bg-rose-50",
        },
        gold: {
            border: "hover:border-yellow-500",
            scale: "hover:scale-105",
            bgHover: "hover:bg-yellow-50",
        },
        silver: {
            border: "hover:border-gray-400",
            scale: "hover:scale-105",
            bgHover: "hover:bg-gray-50",
        },
        bronze: {
            border: "hover:border-amber-600",
            scale: "hover:scale-105",
            bgHover: "hover:bg-amber-50",
        },
    }

    const sizeClasses = {
        small: "h-24 md:h-32",
        medium: "h-32 md:h-40",
        large: "h-40 md:h-56",
    }

    return (
        <Link
            href={sponsor.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        relative ${sizeClasses[size]} bg-white rounded-xl flex items-center justify-center p-4 
        border-2 transition-all duration-300 shadow-md
        ${tierStyles[tier].border} ${tierStyles[tier].scale} ${tierStyles[tier].bgHover}
      `}
        >
            <div className="relative w-full h-full">
                <Image
                    src={`/sponsors/${sponsor.logo}`}
                    alt={`${sponsor.name} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2"
                />
            </div>
        </Link>
    )
}

export default function SponsorsPage() {
    return (
        <div className="min-h-screen bg-slate-900 py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Our Sponsors</h1>

                    <div className="rounded-xl p-6 md:p-8 shadow-xl mb-12 bg-gradient-to-br from-blue-400 to-blue-500">
                        <h2 className="text-2xl md:text-3xl text-white text-center font-medium mb-4">
                            Team 114 would not be possible without the generous support of our sponsors.
                        </h2>
                        <p className="text-center text-white text-lg">
                            Interested in becoming a sponsor?{" "}
                            <a
                                href="/eaglestrike_sponsorship_package.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-medium transition-colors text-white hover:text-gray-200"
                            >
                                Read our Sponsorship Package
                            </a>
                        </p>
                    </div>
                </div>
                {tiers.map((tier) => (
                    <section className="mb-16" id={tier.id} key={tier.id}>
                        <SectionTitle title={tier.title} colorClass={tier.colorClass} />
                        {tier.sponsors.length ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {tier.sponsors.map((sponsor) => (
                                    <SponsorCard key={sponsor.name} sponsor={sponsor} tier={tier.id as "gold" | "silver" | "bronze"} size="large" />
                                ))}
                            </div>
                        ) : (
                            <p className="text-white text-3xl font-bold">Become our first {tier.title.split(" ")[0]} Sponsor today!</p>
                        )}
                    </section>
                ))}
            </div>
        </div>
    )
}

