import type { FinancialBenefits, NestedSection, PriorityPrograms, Program } from '@/data/programs';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { ArrowRight, Banknote, BookMarked, CheckCircle2, FileText, Image as ImageIcon, Sparkles, XCircle } from 'lucide-react';

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

                            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-200">
                                <div className="flex h-full w-full items-center justify-center text-slate-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <ImageIcon className="h-12 w-12" strokeWidth={1.25} />
                                        <span className="text-xs tracking-wider uppercase">Program Image</span>
                                    </div>
                                </div>
                            </div>

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
                            tone="sky"
                        />
                        {program.otherRequirements && program.otherRequirements.length > 0 && (
                            <RequirementCard
                                icon={FileText}
                                title="Other Requirements (if applicable)"
                                note={program.otherRequirementsNote}
                                items={program.otherRequirements}
                                tone="amber"
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
}: {
    icon: typeof CheckCircle2;
    title: string;
    note?: string;
    items: string[];
    nestedSection?: NestedSection;
    nestedSections?: NestedSection[];
    tone: keyof typeof TONES;
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
                    {items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                            <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
                            <span>{item}</span>
                        </li>
                    ))}
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
                                            {item.subItems.map((sub, j) => (
                                                <li key={j} className="flex gap-2 text-slate-500">
                                                    <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
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
                                            {item.subItems.map((sub, j) => (
                                                <li key={j} className="flex gap-2 text-slate-500">
                                                    <span className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full opacity-60', t.dot)} />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
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
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
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
                            <div className="overflow-x-auto rounded-xl border border-slate-200">
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
                    {programs.national.map((cat) => (
                        <div key={cat.category || 'default'} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                            {cat.category && <p className="mb-2 text-xs font-bold text-violet-700">{cat.category}</p>}
                            <ul className="space-y-1">
                                {cat.items.map((item) => (
                                    <li key={item} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
