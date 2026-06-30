import { MessengerIcon } from '@/components/icons/messenger';
import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';
import { Facebook, Mail, MapPin, Phone, Smartphone } from 'lucide-react';

const CONTACT_INFO = [
    { icon: Smartphone, label: 'Mobile', value: '0909 711 1264', href: 'tel:09097111264' },
    { icon: Phone, label: 'Telephone', value: '(083) 228 7570', href: 'tel:0832287570' },
    { icon: Mail, label: 'Email', value: 'stufaps12@ched.gov.ph', href: 'mailto:stufaps12@ched.gov.ph' },
    { icon: MessengerIcon, label: 'Messenger', value: 'Chat on Messenger', href: 'https://m.me/stufaps.regionxii' },
    { icon: Facebook, label: 'Facebook', value: 'Stufaps Region XII', href: 'https://www.facebook.com/stufaps.regionxii' },
];

export function Contact() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.1);

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
                        Questions? We're here to help
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Reach out for clarifications, requirements assistance, or application status updates.
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
                                <a
                                    key={info.label}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[420px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4651.115059954733!2d124.87549511119646!3d6.452219423959352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f821c23dbe6015%3A0x53d254e5fe9b1be6!2sCommission%20on%20Higher%20Education%20(CHED)%20-%20Region%2012!5e1!3m2!1sen!2sph!4v1782787088586!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '420px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="CHED Regional Office XII Location"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
