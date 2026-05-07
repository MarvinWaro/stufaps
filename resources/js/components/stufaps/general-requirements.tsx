'use client';

import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
    {
        question: 'What is STUFAPS?',
        answer: 'STUFAPS (Student Financial Assistance Programs) is a collection of scholarship and grant programs offered by the Commission on Higher Education (CHED) to support Filipino students in pursuing higher education.',
    },
    {
        question: 'Who is eligible to apply?',
        answer: 'Eligibility varies per program. Generally, applicants must be Filipino citizens enrolled in or accepted to a CHED-recognized higher education institution. Each program has its own specific academic, financial, and documentary requirements — see the program details above.',
    },
    {
        question: 'How do I apply for a STUFAPS scholarship?',
        answer: 'Applications are typically submitted through your school\'s Office of Student Affairs and Services (OSAS) or directly to CHED Regional Office XII. Prepare all documentary requirements listed under your chosen program before applying.',
    },
    {
        question: 'Can I apply for more than one program at the same time?',
        answer: 'No. Applicants who are existing recipients of any nationally government-funded scholarship or grant (including TES and TDP) are not eligible to receive another. Choose the program that best fits your situation.',
    },
    {
        question: 'When are the application deadlines?',
        answer: 'Deadlines vary by program and academic year. Please contact CHED Regional Office XII or visit our official Facebook page for the most up-to-date announcements.',
    },
    {
        question: 'How much financial assistance will I receive?',
        answer: 'Award amounts depend on the program, your school type (SUC, LUC, or private HEI), and your year level. See the "Financial Benefits" section of each program for detailed breakdowns.',
    },
];

export function GeneralRequirements() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950 py-20 text-white sm:py-28">
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
