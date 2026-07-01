import { About } from '@/components/stufaps/about';
import { ApplyModal } from '@/components/stufaps/apply-modal';
import { Contact } from '@/components/stufaps/contact';
import { Footer } from '@/components/stufaps/footer';
import { GeneralRequirements } from '@/components/stufaps/general-requirements';
import { Hero } from '@/components/stufaps/hero';
import { MobileCta } from '@/components/stufaps/mobile-cta';
import { Navbar } from '@/components/stufaps/navbar';
import { ProgramSection } from '@/components/stufaps/program-section';
import { programs as fallbackPrograms, type Program } from '@/data/programs';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

type PageProps = {
    // Backend can hydrate `programs` later via Inertia::render('stufaps', ['programs' => ...])
    // until then we fall back to the static catalogue.
    programs?: Program[];
};

export default function Stufaps() {
    const page = usePage<PageProps>();
    const programs = page.props.programs ?? fallbackPrograms;
    const [applyOpen, setApplyOpen] = useState(false);

    return (
        <>
            <Head title="STUFAPS — Student Financial Assistance Programs">
                <meta
                    name="description"
                    content="Explore the six scholarship programs offered under CHED's Student Financial Assistance Programs (STUFAPS) for Filipino students."
                />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=poppins:300,400,500,600,700,800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-white pb-[76px] font-sans text-slate-900 antialiased [scroll-behavior:smooth] lg:pb-0">
                <Navbar onApplyClick={() => setApplyOpen(true)} />
                <main>
                    <Hero />
                    <About />
                    {programs.map((program, index) => (
                        <ProgramSection key={program.id} program={program} index={index} />
                    ))}
                    <GeneralRequirements />
                    <Contact />
                </main>
                <Footer />
                <MobileCta onApplyClick={() => setApplyOpen(true)} />
            </div>
            <ApplyModal open={applyOpen} onOpenChange={setApplyOpen} />
        </>
    );
}
