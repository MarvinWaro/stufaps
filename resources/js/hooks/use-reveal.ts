import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll. Returns a ref + a boolean that flips true once the element
 * intersects the viewport. Single observation — fires once, then disconnects.
 *
 * Defenses:
 *  - If `IntersectionObserver` is unavailable (very old browser), content is
 *    visible immediately on mount.
 *  - A 1.2s fallback timer flips `visible` true even if the observer never
 *    fires (e.g. on extremely tall sections where intersection math is weird).
 *    This ensures content is never permanently stuck invisible.
 *
 * The `threshold` arg is accepted for API compatibility but ignored.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(_threshold = 0) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        const el = ref.current;
        if (!el || visible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: '0px 0px -60px 0px' },
        );
        observer.observe(el);

        const fallback = window.setTimeout(() => setVisible(true), 1200);

        return () => {
            observer.disconnect();
            window.clearTimeout(fallback);
        };
    }, [visible]);

    return { ref, visible } as const;
}
