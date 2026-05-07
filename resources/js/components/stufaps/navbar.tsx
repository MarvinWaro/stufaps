import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { programs } from '@/data/programs';

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    ...programs.map((p) => ({ id: p.id, label: p.acronym })),
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const ids = NAV_LINKS.map((l) => l.id);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const handleClick = (id: string) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent',
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <button onClick={() => handleClick('home')} className="flex items-center gap-2.5 font-bold tracking-tight">
                    <img src="https://srms-bucket.sgp1.cdn.digitaloceanspaces.com/srms-images/ched.png" alt="CHED" className="h-10 w-10 object-contain" />
                    <img src="https://srms-bucket.sgp1.cdn.digitaloceanspaces.com/srms-images/bp-logo.png" alt="Bagong Pilipinas" className="h-10 w-10 object-contain" />
                    <span className={cn('text-lg', scrolled ? 'text-slate-900' : 'text-white')}>STUFAPS</span>
                </button>

                <nav className="hidden items-center gap-1 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleClick(link.id)}
                            className={cn(
                                'relative px-3 py-2 text-sm font-medium transition-colors',
                                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white/90 hover:text-white',
                                active === link.id && (scrolled ? 'text-sky-600' : 'text-white'),
                            )}
                        >
                            {link.label}
                            <span
                                className={cn(
                                    'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-current transition-transform duration-300',
                                    active === link.id && 'scale-x-100',
                                )}
                            />
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => handleClick('contact')}
                    className="ml-4 hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
                >
                    Apply Now
                </button>

                <button
                    onClick={() => setOpen((v) => !v)}
                    className={cn(
                        'inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden',
                        scrolled ? 'text-slate-900' : 'text-white',
                    )}
                    aria-label="Toggle menu"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            <div
                className={cn(
                    'overflow-hidden bg-white shadow-lg transition-[max-height,opacity] duration-300 lg:hidden',
                    open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0',
                )}
            >
                <nav className="flex flex-col px-4 py-2">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleClick(link.id)}
                            className={cn(
                                'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                                active === link.id ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50',
                            )}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleClick('contact')}
                        className="mt-2 mb-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md"
                    >
                        Apply Now
                    </button>
                </nav>
            </div>
        </header>
    );
}
