import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll. Returns a ref + a boolean that flips true once the element
 * intersects the viewport. Single observation — fires once, then disconnects.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

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
            { threshold, rootMargin: '0px 0px -60px 0px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, visible]);

    return { ref, visible } as const;
}
