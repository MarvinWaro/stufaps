import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { BookOpen, HandCoins, ShieldCheck, Users } from 'lucide-react';

const FEATURES = [
    { icon: BookOpen, title: 'Quality Education', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.' },
    { icon: HandCoins, title: 'Financial Support', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
    { icon: Users, title: 'Inclusive Reach', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.' },
    { icon: ShieldCheck, title: 'Government-Backed', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.' },
];

export function About() {
    const { ref, visible } = useReveal<HTMLDivElement>();

    return (
        <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
            <div
                ref={ref}
                className={cn(
                    'mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8',
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">About STUFAPS</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Opening doors to higher education
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Student Financial Assistance Programs (STUFAPS) is a
                        coordinated set of grants and scholarships from CHED designed to make tertiary education accessible, inclusive, and
                        meaningful for every qualified Filipino learner.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((f, i) => (
                        <div
                            key={f.title}
                            className={cn(
                                'group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100',
                                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
                            )}
                            style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md transition-transform group-hover:scale-110">
                                <f.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
