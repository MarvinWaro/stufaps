import { programs } from '@/data/programs';
import { ArrowUp, Facebook, Mail, MapPin, Phone, Smartphone } from 'lucide-react';

const USEFUL_LINKS = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Requirements', target: 'requirements' },
    { label: 'Contact', target: 'contact' },
];

const RESOURCES = [
    { label: 'Application Guide', target: 'requirements' },
    { label: 'FAQ', target: 'contact' },
    { label: 'Privacy Policy', target: 'contact' },
    { label: 'Terms of Service', target: 'contact' },
];

const SOCIALS = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/stufaps.regionxii' },
];

export function Footer() {
    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_50%)]" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 font-bold">
                            <img src="/assets/img/ched-logo.png" alt="CHED" className="h-10 w-10 object-contain" />
                            <img src="/assets/img/bagong-pilipinas.png" alt="Bagong Pilipinas" className="h-10 w-10 object-contain" />
                            <span className="text-lg text-white">STUFAPS</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering Filipino students through accessible scholarships
                            and grants.
                        </p>

                        <ul className="mt-6 space-y-2.5 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                                <span className="text-slate-400">CHED Regional Office XII, Koronadal City</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Smartphone className="h-4 w-4 shrink-0 text-sky-400" />
                                <span className="text-slate-400">0909 711 1264</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                                <span className="text-slate-400">(083) 228 7570</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                                <span className="text-slate-400">stufaps12@ched.gov.ph</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="relative inline-block pb-2 text-sm font-bold tracking-wider text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-sky-500">
                            Useful Links
                        </h3>
                        <ul className="mt-5 space-y-2.5 text-sm">
                            {USEFUL_LINKS.map((l) => (
                                <li key={l.label}>
                                    <button
                                        onClick={() => scrollTo(l.target)}
                                        className="text-slate-400 transition-colors hover:text-sky-400"
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="relative inline-block pb-2 text-sm font-bold tracking-wider text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-sky-500">
                            Programs
                        </h3>
                        <ul className="mt-5 space-y-2.5 text-sm">
                            {programs.map((p) => (
                                <li key={p.id}>
                                    <button
                                        onClick={() => scrollTo(p.id)}
                                        className="text-left text-slate-400 transition-colors hover:text-sky-400"
                                    >
                                        {p.acronym}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="relative inline-block pb-2 text-sm font-bold tracking-wider text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-sky-500">
                            Resources
                        </h3>
                        <ul className="mt-5 space-y-2.5 text-sm">
                            {RESOURCES.map((r) => (
                                <li key={r.label}>
                                    <button
                                        onClick={() => scrollTo(r.target)}
                                        className="text-slate-400 transition-colors hover:text-sky-400"
                                    >
                                        {r.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex gap-2">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400"
                                >
                                    <s.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} <span className="font-semibold text-slate-300">STUFAPS</span>. All Rights Reserved.
                    </p>
                    <p className="text-xs text-slate-500">
                        Designed with care for the <span className="text-sky-400">Filipino learner</span>.
                    </p>
                </div>
            </div>

            <button
                onClick={scrollTop}
                aria-label="Back to top"
                className="fixed right-6 bottom-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </footer>
    );
}
