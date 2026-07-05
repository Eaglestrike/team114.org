import Image from "next/image"
import Link from "next/link"

export default function MeetTheRobot() {
    return (
        <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Meet <span className="font-mono text-blue-400">Inertia</span>
                    </h2>
                    <p className="text-sm font-mono uppercase text-gray-400">Our 2026 Robot</p>
                </div>

                <div className="relative aspect-video max-w-3xl mx-auto mb-16">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-slate-700 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/20">
                            <Image
                                src="/inertia.jpeg"
                                alt="Inertia - Our 2026 Robot"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain"
                            />
                        </div>
                </div>
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

