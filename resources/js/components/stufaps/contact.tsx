import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { Facebook, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const CONTACT_INFO = [
    { icon: Phone, label: 'Phone', value: '0909 711 1264' },
    { icon: Phone, label: 'Telephone', value: '(083) 228 7570' },
    { icon: Mail, label: 'Email', value: 'stufaps12@ched.gov.ph' },
    { icon: Facebook, label: 'Facebook', value: 'Stufaps Region XII' },
];

export function Contact() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Backend hook-up later: replace with router.post('/contact', data)
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3500);
    };

    return (
        <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-28">
            <div
                ref={ref}
                className={cn(
                    'mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8',
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">Get in Touch</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Questions? We’re here to help
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out for clarifications, requirements assistance, or
                        application status updates.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="space-y-6 lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">Office Address</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        CHED Regional Office XII
                                        <br />
                                        Koronadal City, South Cotabato
                                        <br />
                                        Philippines
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {CONTACT_INFO.map((info) => (
                                <div
                                    key={info.label}
                                    className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-9 w-9 place-items-center rounded-lg bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                                            <info.icon className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs text-slate-500">{info.label}</div>
                                            <div className="truncate text-sm font-semibold text-slate-900">{info.value}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                            <div className="flex h-full w-full items-center justify-center text-slate-400">
                                <div className="flex flex-col items-center gap-2">
                                    <MapPin className="h-10 w-10" strokeWidth={1.25} />
                                    <span className="text-xs tracking-wider uppercase">Map Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
                    >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field label="Full Name" name="name" placeholder="Juan Dela Cruz" required />
                            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="mt-4">
                            <Field label="Subject" name="subject" placeholder="Inquiry about CMSP" required />
                        </div>
                        <div className="mt-4">
                            <label className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase">Message</label>
                            <textarea
                                name="message"
                                rows={6}
                                required
                                placeholder="How can we help?"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitted}
                            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 sm:w-auto"
                        >
                            {submitted ? 'Message Sent ✓' : (
                                <>
                                    Send Message
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    name,
    type = 'text',
    placeholder,
    required,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-1.5 block text-xs font-semibold tracking-wider text-slate-700 uppercase">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/15"
            />
        </div>
    );
}
