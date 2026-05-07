import { useReveal } from '@/hooks/use-reveal';
import { cn } from '@/lib/utils';

export function About() {
    const { ref, visible } = useReveal<HTMLDivElement>();

    return (
        <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
            <div
                ref={ref}
                className={cn(
                    'mx-auto max-w-7xl px-4 transition-all duration-700 sm:px-6 lg:px-8',
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">About STUFAPS</span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Opening doors to higher education
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                        The CHED Student Financial Assistance Programs (StuFAPs) provide opportunities for Filipino students to pursue higher
                        education through accessible scholarship support. With various grants available, students are encouraged to select the
                        program that best aligns with their chosen course, qualifications, interests, and financial needs. Choosing the
                        appropriate scholarship ensures that students can fully benefit from the assistance and progress confidently toward
                        their academic and career goals.
                    </p>
                </div>
            </div>
        </section>
    );
}
