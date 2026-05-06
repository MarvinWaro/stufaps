import { ArrowRight, GraduationCap, Image as ImageIcon } from 'lucide-react';

export function Hero() {
    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 pt-32 pb-24 text-white sm:pt-40 sm:pb-32"
        >
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute -top-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-sky-500/30 blur-3xl" />
                <div
                    className="absolute -right-20 -bottom-20 h-96 w-96 animate-pulse rounded-full bg-blue-500/30 blur-3xl"
                    style={{ animationDelay: '1.5s' }}
                />
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="animate-[fadeInUp_0.8s_ease-out]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                        </span>
                        Now Accepting Applications
                    </span>

                    <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Student Financial
                        <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Assistance Programs
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover six scholarship opportunities from the Commission on
                        Higher Education designed to support deserving Filipino students across diverse fields of study.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            onClick={() => scrollTo('cmsp')}
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/40"
                        >
                            Explore Programs
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                        >
                            Get in Touch
                        </button>
                    </div>

                    <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                        {[
                            { value: '6', label: 'Programs' },
                            { value: '500K+', label: 'Beneficiaries' },
                            { value: '100%', label: 'Filipino-First' },
                        ].map((s, i) => (
                            <div
                                key={s.label}
                                className="animate-[fadeInUp_0.8s_ease-out_both]"
                                style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                            >
                                <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
                                <div className="text-xs tracking-wider text-slate-400 uppercase">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative animate-[fadeInUp_1s_ease-out_0.3s_both]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-700/30">
                            <div className="flex flex-col items-center gap-3 text-white/60">
                                <ImageIcon className="h-16 w-16" strokeWidth={1.25} />
                                <span className="text-sm font-medium tracking-wider uppercase">Hero Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/95 p-4 shadow-2xl backdrop-blur sm:block">
                        <div className="flex items-center gap-3">
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500">Trusted by</div>
                                <div className="text-sm font-bold text-slate-900">CHED · DepEd · TESDA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
