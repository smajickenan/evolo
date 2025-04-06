import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ValueProposition } from "./components/ValueProposition";
import { StickyScroll } from "./components/ui/StickyScroll";
import { Compare } from "../src/components/ui/Compare";
import { Testimonials } from "./components/Testimonials";

import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LinkPreview } from "./components/ui/LinkPreview";
import Pricing from "./components/Pricing";
import { FlipWords } from "./components/ui/FlipWords";
import TechWeUse from "./components/TechnologiesWeUse";
import MeteorsSection from './components/Meteors';
import CardHoverEffectDemo from './components/CardHover';
import Portfolio from './components/Portfolio';
import { HeroParallax } from './components/ui/hero-parallax';
import { OurServices } from './components/OurServices';
import { TechCarousel } from './components/TechCarousel';

import EmailSection from './components/EmailSection';
import FAQSection from './components/FAQSection';




export function App() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="relative font-[Lexend] text-[#023157] overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header 
            scrollToPricing={scrollToPricing} 
            scrollToServices={scrollToServices} 
            scrollToContact={scrollToContact}
            scrollToPortfolio={scrollToPortfolio}
          />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <HeroSection />
                 
                  <div className="py-14 bg-[#0c1a39]">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="font-libre text-5xl font-bold text-white">
                        Build{" "}
                        <FlipWords
                          words={[
                            "modern",
                            "clean",
                            "Professional",
                            "Functional",
                          ]}
                          duration={2000}
                          className="text-[#6fa8d6]"
                        />{" "}
                        websites with Evolo
                      </h2>
                    </div>
                  </div>
                  <section ref={servicesRef}>
                  <OurServices/>
                  <TechCarousel />
                  </section>
                  <section ref={portfolioRef}>
                    <Portfolio />
                  </section>
                  <FAQSection />
                  <EmailSection/>
                 
                  

                  <ValueProposition />
                
                  <Testimonials />
                  <section ref={pricingRef}>
                    <Pricing />
                  </section>
                  <section ref={contactRef}>
                    <MeteorsSection/>
                  </section>
                </main>
              }
            />
            <Route path="/about" element={<div>About Page</div>} />
       
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
