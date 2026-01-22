import Image from "next/image"
import Link from "next/link"

export default function MeetTheRobot() {
    return (
        <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Meet <span className="font-mono text-blue-400">???</span>
                    </h2>
                    <p className="text-sm font-mono uppercase text-gray-400">Our 2026 Robot</p>
                </div>

                <div className="relative aspect-video max-w-3xl mx-auto mb-16">
                    <Link href="/snoopy">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-slate-700 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/20">
                            <Image
                                src="/robot shadow.png"
                                alt="SN00PY - Our 2024 Robot"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <FeatureCard
                        icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-gear-wide mx-auto"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                        </svg>}
                        title="?"
                        description="?"
                    />
                    <FeatureCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
                        </svg>}
                        title="#1 Rank"
                        description={
                            <div className="flex justify-center space-x-2">
                                <Link
                                    href="https://www.thebluealliance.com/event/2024casf"
                                    className="text-blue-400 hover:text-blue-300 hover:underline"
                                >
                                    SFR
                                </Link>
                                <span>&</span>
                                <Link
                                    href="https://www.thebluealliance.com/event/2024idbo"
                                    className="text-blue-400 hover:text-blue-300 hover:underline"
                                >
                                    Idaho
                                </Link>
                            </div>
                        }
                    />
                    <FeatureCard
                        icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-people-fill mx-auto"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>}
                        title="Student Built"
                        description="Always designed and constructed by our team"
                    />
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode; title: string; description: React.ReactNode
}) {
    return (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500" >
            <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
            <h3 className="text-lg font-bold text-white mb-2 text-center">{title}</h3>
            <div className="text-gray-300 text-center">{description}</div>
        </div>
    )
}

