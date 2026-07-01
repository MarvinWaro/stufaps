import { MessengerIcon } from '@/components/icons/messenger';
import { cn } from '@/lib/utils';
import { ArrowRight, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function MobileCta({ onApplyClick }: { onApplyClick?: () => void }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 300);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={cn(
                'fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-300 lg:hidden',
                show ? 'translate-y-0' : 'translate-y-full',
            )}
        >
            <div className="flex items-center gap-2">
                <a
                    href="tel:09097111264"
                    aria-label="Call STUFAPS"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-sky-600 shadow-sm transition-colors active:bg-slate-50"
                >
                    <Phone className="h-5 w-5" />
                </a>
                <a
                    href="https://m.me/stufaps.regionxii"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message STUFAPS on Messenger"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0084FF] text-white shadow-sm transition-transform active:scale-95"
                >
                    <MessengerIcon className="h-5 w-5" />
                </a>
                <button
                    onClick={() => onApplyClick?.()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/30 active:scale-[0.98]"
                >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
