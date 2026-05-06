import { generalRequirements } from '@/data/programs';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { ClipboardList, FileCheck2, Scroll } from 'lucide-react';

const SECTIONS = [
    { key: 'documentary', title: 'Documentary', subtitle: 'Standard supporting documents', icon: ClipboardList, items: generalRequirements.documentary },
    { key: 'general', title: 'General', subtitle: 'Required for all applicants', icon: FileCheck2, items: generalRequirements.general },
    { key: 'specific', title: 'Specific', subtitle: 'Program-level requirements', icon: Scroll, items: generalRequirements.specific },
] as const;

export function GeneralRequirements() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);

    return (
        <section id="requirements" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950 py-20 text-white sm:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />

            <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        'mx-auto max-w-3xl text-center transition-all duration-700',
                        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                    )}
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-300 uppercase">Common Requirements</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        What you’ll need to apply
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                        Lorem ipsum dolor sit amet. Most STUFAPS programs share a common set of baseline documentary requirements. Prepare these
                        ahead of time to streamline your application.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {SECTIONS.map((section, i) => (
                        <div
                            key={section.key}
                            className={cn(
                                'group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 sm:p-7',
                                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                            )}
                            style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-md transition-transform group-hover:scale-110">
                                <section.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-5 text-lg font-bold">{section.title}</h3>
                            <p className="text-sm text-slate-400">{section.subtitle}</p>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
