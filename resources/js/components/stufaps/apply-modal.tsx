import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { openPrograms } from '@/data/programs';
import { cn } from '@/lib/utils';
import { ArrowUpRight, CalendarClock, Mail, Phone } from 'lucide-react';

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function ApplyModal({ open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex h-[100dvh] w-screen max-w-none flex-col gap-0 rounded-none border-0 bg-white p-0 sm:h-auto sm:max-h-[85vh] sm:w-full sm:max-w-3xl sm:rounded-2xl">
                <DialogHeader className="space-y-1.5 border-b border-slate-100 px-6 py-5 text-left sm:px-8">
                    <DialogTitle className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                        Apply for a Scholarship
                    </DialogTitle>
                    <DialogDescription className="text-sm text-slate-500">
                        Select a program below to open its official application portal. Applications close on the
                        deadline shown.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 gap-4 overflow-y-auto px-6 py-6 sm:grid-cols-2 sm:px-8">
                    {openPrograms.map((program) => {
                        const Icon = program.icon;
                        const app = program.application!;
                        return (
                            <div
                                key={program.id}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={cn(
                                            'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md',
                                            program.accent,
                                        )}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-base font-bold text-slate-900">{program.acronym}</h3>
                                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{program.name}</p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
                                    <CalendarClock className="h-4 w-4 shrink-0 text-sky-600" />
                                    <span className="text-xs text-slate-600">
                                        Deadline: <span className="font-semibold text-slate-900">{app.deadline}</span>
                                    </span>
                                </div>

                                <a
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        'group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg',
                                        program.accent,
                                    )}
                                >
                                    Apply Now
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>

                                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-slate-100 pt-3">
                                    <a
                                        href={`mailto:${app.email}`}
                                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-sky-600"
                                    >
                                        <Mail className="h-3.5 w-3.5" />
                                        {app.email}
                                    </a>
                                    <a
                                        href={`tel:${app.phone.replace(/\s+/g, '')}`}
                                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-sky-600"
                                    >
                                        <Phone className="h-3.5 w-3.5" />
                                        {app.phone}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
}
