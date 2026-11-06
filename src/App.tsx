import React from 'react';

import { Hero } from './components/Hero/Hero.tsx';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { CtaSection } from './components/CtaSection/CtaSection.tsx';
import { HardwareKits } from './components/HardwareKits/HardwareKits.tsx';
import { EcosystemSection } from './components/EcosystemSection/EcosystemSection.tsx';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection.tsx';

export const App: React.FC = () => {
    return (
        <div className="min-h-screen relative selection:bg-[#ffd600] selection:text-gray-950 font-sans">
            <div className="liquid-canvas-bg" aria-hidden="true">
                <div className="tech-grid-pattern" />
            </div>

            <Navbar />

            <main>
                <Hero />
                <EcosystemSection />
                <HardwareKits />
                <ReviewsSection />
                <CtaSection />
            </main>

            <Footer />
        </div>
    );
};

export default App;
