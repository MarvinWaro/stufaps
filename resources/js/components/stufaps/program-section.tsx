import type { FinancialBenefits, NestedSection, PriorityPrograms, Program } from '@/data/programs';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { ArrowRight, Banknote, BookMarked, Check, CheckCircle2, FileText, Share2, Sparkles, XCircle } from 'lucide-react';
import { useState } from 'react';

type Props = {
    program: Program;
    index: number;
};

export function ProgramSection({ program, index }: Props) {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);
    const reverse = index % 2 === 1;
    const Icon = program.icon;

    return (
        <section
            id={program.id}
            className={cn('relative scroll-mt-24 py-20 sm:py-28', index % 2 === 1 ? 'bg-slate-50' : 'bg-white')}
        >
            <div
                ref={ref}
                className={cn(
                    'mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8',
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                )}
            >
                <div className={cn('grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16', reverse && 'lg:[&>*:first-child]:order-2')}>
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 space-y-6">
                            <div
                                className={cn(
                                    'inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg',
                                    program.accent,
                                )}
                            >
                                <Icon className="h-8 w-8" />
                            </div>

                            <div>
                                <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">Program {String(index + 1).padStart(2, '0')}</span>
                                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                    {program.acronym}
                                </h2>
                                <p className="mt-1 text-base font-semibold text-slate-700">{program.name}</p>
                                <p className="mt-3 text-sm text-sky-600">{program.tagline}</p>
                            </div>

                            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{program.description}</p>

                            <div className="flex flex-wrap items-center gap-3">
                                {program.application ? (
                                    <a
                                        href={program.application.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            'group inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg',
                                            program.accent,
                                        )}
                                    >
                                        Apply for {program.acronym}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className={cn(
                                            'group inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg',
                                            program.accent,
                                        )}
                                    >
                                        Apply for {program.acronym}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                )}
                                <ShareButton program={program} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 lg:col-span-7">
                        <RequirementCard
                            icon={CheckCircle2}
                            title="Eligibility"
                            note={program.eligibilityNote}
                            items={program.eligibility}
                            nestedSection={program.eligibilityNestedSection}
                            tone="emerald"
                        />
                        {program.ineligibility && program.ineligibility.length > 0 && (
                            <RequirementCard
                                icon={XCircle}
                                title="Ineligibility Requirements"
                                note={program.ineligibilityNote}
                                items={program.ineligibility}
                                tone="red"
                            />
                        )}
                        <RequirementCard
                            icon={FileText}
                            title="Documentary Requirements"
                            note={program.documentaryNote}
                            items={program.documentaryRequirements}
                            nestedSection={program.documentaryNestedSection}
                            nestedSections={program.documentaryNestedSections}
                            boldSubLabel={program.documentaryBoldSubLabel}
                            tone="sky"
                        />
                        {program.otherRequirements && program.otherRequirements.length > 0 && (
                            <RequirementCard
                                icon={FileText}
                                title="Other Requirements (if applicable)"
                                note={program.otherRequirementsNote}
                                items={program.otherRequirements}
                                tone="amber"
                                boldLabel={program.otherRequirementsBoldLabel}
                            />
                        )}
                        {program.benefits && program.benefits.length > 0 && (
                            <RequirementCard icon={Sparkles} title="Benefits" items={program.benefits} tone="rose" />
                        )}
                        {program.priorityPrograms && (
                            <PriorityProgramsCard programs={program.priorityPrograms} />
                        )}
                        {program.financialBenefits && (
                            <FinancialBenefitsCard benefits={program.financialBenefits} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const TONES = {
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', dot: 'bg-emerald-600', border: 'border-emerald-200' },
    sky: { bg: 'bg-sky-50', icon: 'text-sky-600', dot: 'bg-sky-600', border: 'border-sky-200' },
    amber: { bg: 'bg-amber-50', icon: 'text-amber-600', dot: 'bg-amber-600', border: 'border-amber-200' },
    rose: { bg: 'bg-rose-50', icon: 'text-rose-600', dot: 'bg-rose-600', border: 'border-rose-200' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', dot: 'bg-red-600', border: 'border-red-200' },
} as const;

function RequirementCard({
    icon: Icon,
    title,
    note,
    items,
    nestedSection,
    nestedSections,
    tone,
    boldLabel,
    boldSubLabel,
}: {
    icon: typeof CheckCircle2;
    title: string;
    note?: string;
    items: string[];
    nestedSection?: NestedSection;
    nestedSections?: NestedSection[];
    tone: keyof typeof TONES;
    boldLabel?: boolean;
    boldSubLabel?: boolean;
}) {
    const t = TONES[tone];
    return (
        <div className={cn('rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7', t.border)}>
            <div className="flex items-center gap-3">
                <div className={cn('grid h-10 w-10 place-items-center rounded-lg', t.bg)}>
                    <Icon className={cn('h-5 w-5', t.icon)} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            </div>
            {note && <p className="mt-3 text-sm leading-relaxed text-slate-600">{note}</p>}
            {items.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                    {items.map((item, i) => {
                        if (boldLabel) {
                            const colonIdx = item.indexOf(':');
                            if (colonIdx !== -1) {
                                const label = item.slice(0, colonIdx + 1);
                                const rest = item.slice(colonIdx + 1);
                                return (
                                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                        <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
                                        <span><span className="font-semibold text-slate-900">{label}</span>{rest}</span>
                                    </li>
                                );
                            }
                        }
                        return (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
                                <span>{item}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
            {nestedSection && (
                <div className={cn('mt-5 pt-5', items.length > 0 && 'border-t border-slate-100')}>
                    {nestedSection.title && <p className="mb-3 text-sm font-semibold text-slate-700">{nestedSection.title}</p>}
                    <ul className="space-y-3">
                        {nestedSection.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
                                <div>
                                    <span>{item.text}</span>
                                    {item.subItems && item.subItems.length > 0 && (
                                        <ul className="mt-2 space-y-1.5 pl-2">
                                            {item.subItems.map((sub, j) => {
                                                if (boldSubLabel) {
                                                    const dashIdx = sub.indexOf(' — ');
                                                    if (dashIdx !== -1) {
                                                        return (
                                                            <li key={j} className="flex gap-2 text-slate-500">
                                                                <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                                <span><span className="font-semibold text-slate-900">{sub.slice(0, dashIdx)}</span>{sub.slice(dashIdx)}</span>
                                                            </li>
                                                        );
                                                    }
                                                }
                                                return (
                                                    <li key={j} className="flex gap-2 text-slate-500">
                                                        <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                        <span>{sub}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {nestedSections && nestedSections.map((ns, nsIndex) => (
                <div key={nsIndex} className={cn('mt-5 pt-5 border-t border-slate-100', nsIndex === 0 && !items.length && 'border-t-0')}>
                    {ns.title && <p className="mb-3 text-sm font-semibold text-slate-700">{ns.title}</p>}
                    <ul className="space-y-3">
                        {ns.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
                                <div>
                                    <span>{item.text}</span>
                                    {item.subItems && item.subItems.length > 0 && (
                                        <ul className="mt-2 space-y-1.5 pl-2">
                                            {item.subItems.map((sub, j) => {
                                                if (boldSubLabel) {
                                                    const dashIdx = sub.indexOf(' — ');
                                                    if (dashIdx !== -1) {
                                                        return (
                                                            <li key={j} className="flex gap-2 text-slate-500">
                                                                <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                                <span><span className="font-semibold text-slate-900">{sub.slice(0, dashIdx)}</span>{sub.slice(dashIdx)}</span>
                                                            </li>
                                                        );
                                                    }
                                                }
                                                return (
                                                    <li key={j} className="flex gap-2 text-slate-500">
                                                        <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                        <span>{sub}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function FinancialBenefitsCard({ benefits }: { benefits: FinancialBenefits }) {
    return (
        <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50">
                    <Banknote className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Financial Benefits</h3>
            </div>
            <div className="space-y-6">
                {/* Detailed table (Program × Particulars × Per Semester × Per AY) */}
                {benefits.detailedGroups?.map((dg) => (
                    <div key={dg.institution}>
                        <p className="mb-3 text-sm font-semibold text-slate-700">{dg.institution}</p>
                        {dg.summary && dg.summary.length > 0 && (
                            <ul className="mb-3 space-y-1">
                                {dg.summary.map((line) => (
                                    <li key={line} className="text-xs font-semibold tracking-wide text-sky-700 uppercase">{line}</li>
                                ))}
                            </ul>
                        )}
                        {/* Desktop table */}
                        <div className="hidden overflow-x-auto rounded-xl border border-slate-200 md:block">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-50 text-left">
                                        <th className="px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">Program</th>
                                        <th className="px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">Particulars</th>
                                        <th className="px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">Per Semester</th>
                                        <th className="px-4 py-2.5 text-right text-xs font-semibold tracking-wider text-slate-500 uppercase">Per AY</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {dg.programGroups.map((pg) =>
                                        pg.rows.map((row, rowIndex) => (
                                            <tr key={`${pg.program}-${rowIndex}`} className={row.isTotal ? 'bg-slate-50' : 'hover:bg-slate-50/60'}>
                                                {rowIndex === 0 && (
                                                    <td rowSpan={pg.rows.length} className="px-4 py-3 align-top font-semibold text-slate-900">{pg.program}</td>
                                                )}
                                                <td className={`px-4 py-3 ${row.isTotal ? 'text-right font-bold text-slate-900' : 'text-slate-600'}`}>{row.particulars}</td>
                                                <td className={`px-4 py-3 ${row.isTotal ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{row.perSemester}</td>
                                                <td className={`px-4 py-3 text-right ${row.isTotal ? 'font-bold text-sky-600' : 'text-slate-600'}`}>{row.perAY}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile cards */}
                        <div className="space-y-3 md:hidden">
                            {dg.programGroups.map((pg) => (
                                <div key={pg.program} className="overflow-hidden rounded-xl border border-slate-200">
                                    <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                                        <p className="text-xs font-bold tracking-wider text-slate-700 uppercase">{pg.program}</p>
                                    </div>
                                    <div className="divide-y divide-slate-100">
                                        {pg.rows.map((row, rowIndex) => (
                                            <div
                                                key={`${pg.program}-mobile-${rowIndex}`}
                                                className={cn('px-4 py-3', row.isTotal && 'bg-sky-50')}
                                            >
                                                {row.isTotal ? (
                                                    <div className="flex items-baseline justify-between gap-3">
                                                        <p className="text-xs font-bold tracking-wider text-slate-700 uppercase">{row.particulars || 'Total'}</p>
                                                        <p className="text-base font-extrabold text-sky-600">{row.perAY}</p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <p className="text-sm font-semibold text-slate-900">{row.particulars}</p>
                                                        <dl className="mt-2 grid grid-cols-2 gap-2 text-xs">
                                                            <div>
                                                                <dt className="text-slate-500">Per Semester</dt>
                                                                <dd className="mt-0.5 font-semibold text-slate-700">{row.perSemester}</dd>
                                                            </div>
                                                            <div className="text-right">
                                                                <dt className="text-slate-500">Per AY</dt>
                                                                <dd className="mt-0.5 font-semibold text-slate-700">{row.perAY}</dd>
                                                            </div>
                                                        </dl>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {/* Simple table (Scholar Type × columns…) */}
                {benefits.groups?.map((group, gi) => {
                    const cols = group.columns ?? ['Scholar Type', 'TOSF', 'Stipend', 'Book Allowance', 'Total'];
                    const colCount = cols.length;
                    const hasVisibleHeaders = cols.some((c) => c !== '');
                    return (
                        <div key={gi}>
                            {group.institution && <p className="mb-3 text-sm font-semibold text-slate-700">{group.institution}</p>}
                            {group.summary && group.summary.length > 0 && (
                                <ul className="mb-3 space-y-1">
                                    {group.summary.map((line) => (
                                        <li key={line} className="text-xs font-semibold tracking-wide text-sky-700 uppercase">{line}</li>
                                    ))}
                                </ul>
                            )}
                            {/* Desktop table */}
                            <div className="hidden overflow-x-auto rounded-xl border border-slate-200 md:block">
                                <table className="min-w-full text-sm">
                                    {(group.tableTitle || hasVisibleHeaders) && (
                                        <thead>
                                            {group.tableTitle && (
                                                <tr className="bg-slate-100">
                                                    <th colSpan={colCount} className="px-4 py-2.5 text-left text-xs font-bold tracking-wider text-slate-700 uppercase">{group.tableTitle}</th>
                                                </tr>
                                            )}
                                            {hasVisibleHeaders && (
                                                <tr className="bg-slate-50 text-left">
                                                    {cols.map((col, i) => (
                                                        <th key={i} className={`px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-500 uppercase${i === colCount - 1 ? ' text-right' : ''}`}>{col}</th>
                                                    ))}
                                                </tr>
                                            )}
                                        </thead>
                                    )}
                                    <tbody className="divide-y divide-slate-100">
                                        {group.rows.map((row) => {
                                            const cells = [row.scholarType, row.tsfLabel, row.stipend, row.bookAllowance, row.total];
                                            if (row.isSpanned) {
                                                return (
                                                    <tr key={row.scholarType} className="hover:bg-slate-50/60">
                                                        <td className="px-4 py-3 font-semibold text-slate-900">{cells[0]}</td>
                                                        <td colSpan={colCount - 1} className="px-4 py-3 text-slate-600">{cells[1]}</td>
                                                    </tr>
                                                );
                                            }
                                            if (row.isTotal) {
                                                return (
                                                    <tr key={row.scholarType} className="bg-slate-50">
                                                        {cells.slice(0, colCount).map((cell, i) => (
                                                            <td key={i} className={`px-4 py-3 font-bold${i === 0 ? ' text-right text-slate-900' : i === colCount - 1 ? ' text-right text-sky-600' : ' text-slate-900'}`}>{cell}</td>
                                                        ))}
                                                    </tr>
                                                );
                                            }
                                            return (
                                                <tr key={row.scholarType} className="hover:bg-slate-50/60">
                                                    {cells.slice(0, colCount).map((cell, i) => (
                                                        <td key={i} className={`px-4 py-3${i === 0 ? ' font-semibold text-slate-900' : i === colCount - 1 ? ' text-right font-bold text-sky-600' : ' text-slate-600'}`}>{cell}</td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile cards */}
                            <div className="space-y-3 md:hidden">
                                {group.tableTitle && (
                                    <p className="text-xs font-bold tracking-wider text-slate-700 uppercase">{group.tableTitle}</p>
                                )}
                                {group.rows.map((row, rowIndex) => {
                                    const cells = [row.scholarType, row.tsfLabel, row.stipend, row.bookAllowance, row.total];
                                    if (row.isSpanned) {
                                        return (
                                            <div key={`${row.scholarType}-mobile-${rowIndex}`} className="rounded-xl border border-slate-200 bg-white p-4">
                                                <p className="text-xs font-bold tracking-wider text-slate-700 uppercase">{cells[0]}</p>
                                                <p className="mt-1.5 text-sm text-slate-600">{cells[1]}</p>
                                            </div>
                                        );
                                    }
                                    if (row.isTotal) {
                                        return (
                                            <div key={`${row.scholarType}-mobile-${rowIndex}`} className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                                                <div className="flex items-baseline justify-between gap-3">
                                                    <p className="text-xs font-bold tracking-wider text-slate-700 uppercase">{cells[0] || 'Total'}</p>
                                                    <p className="text-base font-extrabold text-sky-600">{cells[colCount - 1]}</p>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={`${row.scholarType}-mobile-${rowIndex}`} className="rounded-xl border border-slate-200 bg-white p-4">
                                            <p className="text-sm font-bold text-slate-900">{cells[0]}</p>
                                            <dl className="mt-3 space-y-2">
                                                {cols.slice(1, colCount).map((col, i) => {
                                                    const value = cells[i + 1];
                                                    const isLast = i === colCount - 2;
                                                    return (
                                                        <div key={i} className="flex items-baseline justify-between gap-3 border-t border-slate-100 pt-2 first:border-t-0 first:pt-0">
                                                            <dt className="text-xs text-slate-500">{col}</dt>
                                                            <dd className={cn('text-sm font-semibold', isLast ? 'text-sky-600' : 'text-slate-700')}>{value}</dd>
                                                        </div>
                                                    );
                                                })}
                                            </dl>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                <p className="text-xs text-slate-400">Values shown as Per Semester / Per Academic Year</p>
            </div>
        </div>
    );
}

function PriorityProgramsCard({ programs }: { programs: PriorityPrograms }) {
    return (
        <div className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet-50">
                    <BookMarked className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{programs.title ?? 'National Priority Programs'}</h3>
            </div>
            <div className="space-y-5">
                {programs.subtitle && (
                    <p className="text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">{programs.subtitle}</p>
                )}
                {programs.note && (
                    <p className="text-sm leading-relaxed text-slate-600">{programs.note}</p>
                )}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {programs.national.map((cat, idx) => (
                        <div
                            key={cat.category || `category-${idx}`}
                            className={cn(
                                'rounded-xl border border-slate-100 bg-slate-50 p-4',
                                programs.itemColumns && programs.itemColumns > 1 && 'sm:col-span-2',
                            )}
                        >
                            {cat.category && <p className="mb-2 text-xs font-bold text-violet-700">{cat.category}</p>}
                            {programs.itemColumns === 2 ? (
                                <div className="flex gap-6">
                                    {[cat.items.slice(0, Math.ceil(cat.items.length / 2)), cat.items.slice(Math.ceil(cat.items.length / 2))].map((half, hi) => (
                                        <ul key={hi} className="flex-1 space-y-1">
                                            {half.map((item) => (
                                                <li key={item} className="flex min-w-0 gap-2 text-xs leading-relaxed text-slate-600">
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                                    <span className="min-w-0">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-1">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                {programs.regional && programs.regional.length > 0 && (
                    <div>
                        <p className="mb-2 text-xs font-bold tracking-[0.15em] text-violet-600 uppercase">Regional Priority Programs</p>
                        <ul className="space-y-1.5">
                            {programs.regional.map((item) => (
                                <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

function ShareButton({ program }: { program: Program }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = `${window.location.origin}/#${program.id}`;
        const shareData = {
            title: `${program.acronym} — STUFAPS`,
            text: `Check out the ${program.name} (${program.acronym}) scholarship program from CHED.`,
            url,
        };

        if (typeof navigator.share === 'function') {
            try {
                await navigator.share(shareData);
                return;
            } catch {
                // User cancelled the share sheet — fall through to clipboard.
            }
        }

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard blocked; nothing else we can do gracefully.
        }
    };

    return (
        <button
            onClick={handleShare}
            aria-label={`Share ${program.acronym} program`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
        >
            {copied ? (
                <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    Link copied!
                </>
            ) : (
                <>
                    <Share2 className="h-4 w-4" />
                    Share
                </>
            )}
        </button>
    );
}
