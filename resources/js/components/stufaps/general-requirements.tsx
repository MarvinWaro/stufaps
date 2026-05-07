'use client';

import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        question: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco?',
        answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        question: 'Duis aute irure dolor in reprehenderit in voluptate velit?',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
        question: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur?',
        answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.',
    },
    {
        question: 'Quis autem vel eum iure reprehenderit qui in ea voluptate?',
        answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    },
];

export function GeneralRequirements() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="requirements" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950 py-20 text-white sm:py-28">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />

            <div ref={ref} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        'mx-auto max-w-3xl text-center transition-all duration-700',
                        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                    )}
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-300 uppercase">FAQ</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                        Have questions about applying for a STUFAPS scholarship? Find answers to the most common inquiries below.
                    </p>
                </div>

                <div className="mt-14 space-y-3">
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500',
                                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                                openIndex === i && 'border-sky-400/40 bg-white/10',
                            )}
                            style={{ transitionDelay: visible ? `${i * 60}ms` : '0ms' }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className="text-sm font-semibold leading-snug sm:text-base">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        'h-5 w-5 shrink-0 text-sky-400 transition-transform duration-300',
                                        openIndex === i && 'rotate-180',
                                    )}
                                />
                            </button>

                            <div
                                className={cn(
                                    'overflow-hidden transition-all duration-300',
                                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                                )}
                            >
                                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
