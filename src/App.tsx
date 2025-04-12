import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ValueProposition } from "./components/ValueProposition";
import { StickyScroll } from "./components/ui/StickyScroll";
import { Compare } from "../src/components/ui/Compare";
import { Testimonials } from "./components/Testimonials";

import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LinkPreview } from "./components/ui/LinkPreview";

import { FlipWords } from "./components/ui/FlipWords";
import TechWeUse from "./components/TechnologiesWeUse";
import MeteorsSection from "./components/Meteors";
import CardHoverEffectDemo from "./components/CardHover";
import Portfolio from "./components/Portfolio";
import { HeroParallax } from "./components/ui/hero-parallax";
import { OurServices } from "./components/OurServices";
import { TechCarousel } from "./components/TechCarousel";
import ContactFormModal from "./components/ui/ContactFormModal";
import { ModalProvider, useModal } from "./context/ModalContext";

import EmailSection from "./components/EmailSection";
import FAQSection from "./components/FAQSection";
import Statistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper component to use the modal context
const AppContent = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const { isContactModalOpen, closeContactModal } = useModal();

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>
      <div className="relative z-10">
        <Header
          scrollToPricing={scrollToPricing}
          scrollToServices={scrollToServices}
          scrollToContact={scrollToContact}
          scrollToPortfolio={scrollToPortfolio}
          scrollToFAQ={scrollToFAQ}
        />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HeroSection />

                    <div className="py-14 bg-[#0c1a39]">
                      <div className="max-w-5xl mx-auto text-center ">
                        {/* Desktop Version */}
                        <h2 className="hidden sm:block font-libre text-5xl font-bold text-white">
                          Build{" "}
                          <FlipWords
                            words={[
                              "modern",
                              "clean",
                              "professional",
                              "functional",
                            ]}
                            duration={2000}
                            className="text-[#6fa8d6]"
                          />{" "}
                          websites with Evolo
                        </h2>

                        {/* Mobile Version */}
                        <h2 className="block sm:hidden font-libre text-2xl font-bold text-white leading-tight">
                          Build{" "}
                          <span className="inline-block w-[140px] text-[#6fa8d6]">
                            <FlipWords
                              words={[
                                "modern",
                                "clean",
                                "professional",
                                "functional",
                              ]}
                              duration={2000}
                            />
                          </span>
                          <br />
                          websites with Evolo
                        </h2>
                      </div>
                    </div>
                    <section ref={servicesRef}>
                      <OurServices />
                      <TechCarousel/>
                    </section>

                    <section ref={portfolioRef}>
                      <Portfolio />
                    </section>
                    <section ref={faqRef}>
                      <FAQSection />
                    </section>
                    <EmailSection />

                    {/* <ValueProposition /> */}
                    <Testimonials />
                    <section ref={pricingRef}>
                      <Pricing />
                    </section>
                    <Statistics />
                    <section ref={contactRef}>
                      <MeteorsSection />
                    </section>
                  </motion.div>
                  <div className="relative z-20 bg-[#08183e] w-full">
                    <Footer />
                  </div>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AboutUs />
                  </motion.div>
                  <div className="relative z-20 bg-[#08183e] w-full">
                    <Footer />
                  </div>
                </>
              }
            />
          </Routes>
        

        </AnimatePresence>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isContactModalOpen && (
            <ContactFormModal
              isOpen={isContactModalOpen}
              onClose={closeContactModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
}
