import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { programs } from '@/data/programs';

const STATIC_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
];

const ALL_IDS = [
    'home',
    ...programs.map((p) => p.id),
    'faq',
    'contact',
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = useState<string>('home');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );
        ALL_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleClick = (id: string) => {
        setOpen(false);
        setDropdownOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const isProgramActive = programs.some((p) => p.id === active);

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
                    <span className="flex flex-col items-start leading-tight">
                        <span className={cn('text-lg', scrolled ? 'text-slate-900' : 'text-white')}>STUFAPS</span>
                        <span className={cn('text-[10px] font-medium tracking-wider uppercase', scrolled ? 'text-slate-500' : 'text-white/70')}>Regional Office XII</span>
                    </span>
                </button>

                {/* Desktop nav + Apply Now grouped on the right */}
                <div className="hidden items-center gap-1 lg:flex">
                <nav className="flex items-center gap-1">
                    {/* Home */}
                    <NavButton id="home" label="Home" active={active} scrolled={scrolled} onClick={handleClick} />

                    {/* Programs dropdown */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setDropdownOpen((v) => !v)}
                            className={cn(
                                'relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
                                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white/90 hover:text-white',
                                isProgramActive && (scrolled ? 'text-sky-600' : 'text-white'),
                            )}
                        >
                            Programs
                            <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', dropdownOpen && 'rotate-180')} />
                            <span
                                className={cn(
                                    'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-current transition-transform duration-300',
                                    isProgramActive && 'scale-x-100',
                                )}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 w-[420px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                                {programs.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => handleClick(p.id)}
                                        className={cn(
                                            'flex w-full items-start gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-sky-50',
                                            active === p.id ? 'bg-sky-50 font-semibold text-sky-600' : 'text-slate-700',
                                        )}
                                    >
                                        <span className="w-24 shrink-0 font-bold text-slate-900">{p.acronym}</span>
                                        <span className="text-xs leading-relaxed text-slate-500">{p.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* FAQ + Contact */}
                    <NavButton id="faq" label="FAQ" active={active} scrolled={scrolled} onClick={handleClick} />
                    <NavButton id="contact" label="Contact" active={active} scrolled={scrolled} onClick={handleClick} />
                </nav>

                <button
                    onClick={() => handleClick('contact')}
                    className="ml-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Apply Now
                </button>
                </div>

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

            {/* Mobile menu */}
            <div
                className={cn(
                    'overflow-hidden bg-white shadow-lg transition-[max-height,opacity] duration-300 lg:hidden',
                    open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0',
                )}
            >
                <nav className="flex flex-col px-4 py-2">
                    <button
                        onClick={() => handleClick('home')}
                        className={cn(
                            'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                            active === 'home' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50',
                        )}
                    >
                        Home
                    </button>

                    {/* Programs group in mobile */}
                    <p className="mt-2 px-3 pb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Programs</p>
                    {programs.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => handleClick(p.id)}
                            className={cn(
                                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                                active === p.id ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50',
                            )}
                        >
                            {p.acronym}
                        </button>
                    ))}

                    <button
                        onClick={() => handleClick('faq')}
                        className={cn(
                            'mt-1 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                            active === 'faq' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50',
                        )}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => handleClick('contact')}
                        className={cn(
                            'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                            active === 'contact' ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50',
                        )}
                    >
                        Contact
                    </button>

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

function NavButton({
    id,
    label,
    active,
    scrolled,
    onClick,
}: {
    id: string;
    label: string;
    active: string;
    scrolled: boolean;
    onClick: (id: string) => void;
}) {
    return (
        <button
            onClick={() => onClick(id)}
            className={cn(
                'relative px-3 py-2 text-sm font-medium transition-colors',
                scrolled ? 'text-slate-700 hover:text-sky-600' : 'text-white/90 hover:text-white',
                active === id && (scrolled ? 'text-sky-600' : 'text-white'),
            )}
        >
            {label}
            <span
                className={cn(
                    'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-current transition-transform duration-300',
                    active === id && 'scale-x-100',
                )}
            />
        </button>
    );
}
