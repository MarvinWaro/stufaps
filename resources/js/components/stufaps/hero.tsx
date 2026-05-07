import { programs } from '@/data/programs';
import { cn } from '@/lib/utils';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

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
                <div className="animate-[fadeInUp_0.8s_ease-out] text-center lg:text-left">
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

                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
                        Discover six scholarship opportunities from the Commission on Higher Education designed to support deserving Filipino
                        students across diverse fields of study.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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

                </div>

                <div className="relative mx-auto w-[80%] animate-[fadeInUp_1s_ease-out_0.3s_both]">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-700/30">
                            <div className="flex flex-col items-center gap-3 text-white/60">
                                <ImageIcon className="h-16 w-16" strokeWidth={1.25} />
                                <span className="text-sm font-medium tracking-wider uppercase">Hero Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    {programs.map((p, i) => {
                        const PIcon = p.icon;
                        const positions = [
                            'left-[18%] -top-5',
                            '-right-4 top-3',
                            '-left-10 top-[30%]',
                            '-right-8 top-[58%]',
                            '-left-4 bottom-[14%]',
                            'right-[12%] -bottom-5',
                        ];
                        const delays = ['0s', '1.1s', '0.5s', '1.7s', '0.9s', '0.3s'];
                        return (
                            <div key={p.id} className={cn('absolute hidden lg:block', positions[i])}>
                                <div
                                    className="animate-[float_5s_ease-in-out_infinite] rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 shadow-xl backdrop-blur"
                                    style={{ animationDelay: delays[i] }}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-white shadow-md', p.accent)}>
                                            <PIcon className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[10px] font-medium tracking-[0.15em] text-white/50 uppercase">Program</div>
                                            <div className="text-sm font-bold text-white">{p.acronym}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-14px); }
                }
            `}</style>
        </section>
    );
}
