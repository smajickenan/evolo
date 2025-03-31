import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ValueProposition } from "./components/ValueProposition";
import { StickyScroll } from "./components/ui/StickyScroll";
import { Compare } from "../src/components/ui/Compare";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LinkPreview } from "./components/ui/LinkPreview";
import Pricing from "./components/Pricing";
import { FlipWords } from "./components/ui/FlipWords";
import TechWeUse from "./components/TechnologiesWeUse";
import MeteorsSection from './components/Meteors';

const stickyScrollContent = [
  {
    title: "Modern Design",
    description:
      "We create stunning, modern websites that capture your brand's essence and engage your visitors with cutting-edge design principles.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Modern Design"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
       />
      </div>
    ),
  },
  {
    title: "Responsive Development",
    description:
      "Every website we build is fully responsive, ensuring a perfect experience across all devices and screen sizes.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1594751543129-6701ad444259"
          alt="Responsive Design"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
          />
      </div>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize every aspect of your website to ensure fast loading times and smooth performance, keeping your visitors engaged.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
         <img
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
          alt="Performance"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
       />
      </div>
    ),
  },
  {
    title: "SEO Excellence",
    description:
      "Our websites are built with SEO best practices to ensure your business ranks high in search results and reaches more customers.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
         <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="SEO Excellence"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "We create powerful e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1557821552-17105176677c"
          alt="E-commerce Solutions"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Custom Functionality",
    description:
      "We develop custom features and functionality tailored to your business needs, ensuring your website stands out from the competition.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
        src="https://images.unsplash.com/photo-1594751543129-6701ad444259"
          alt="Custom Functionality"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Analytics Integration",
    description:
      "We integrate powerful analytics tools to help you track and optimize your website's performance and user engagement.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Analytics Integration"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
       />
      </div>
    ),
  },
  {
    title: "Security & Maintenance",
    description:
      "We ensure your website is secure and regularly maintained, protecting your business and providing peace of mind.",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
         src="https://images.unsplash.com/photo-1594751543129-6701ad444259"
          alt="Security & Maintenance"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
       />
      </div>
    ),
  },
  {
    title: "Add-on Services",
    description: "Hosting & Domain Management, Content Creation, Branding and Graphic Design",
    content: (
      <div className="h-[100%] w-[130%] flex items-center justify-center text-white">
        <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        alt="Add-on Services"
          className="w-[60vh] h-[60vh] object-cover rounded-md"
       />
      </div>
    ),
  },
];

const linkPreviews = [
  {
    href: "#web-design",
    title: "Web Design",
    description: "Modern, responsive designs that capture your brand's essence",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    href: "#development",
    title: "Development",
    description: "Custom web applications built with cutting-edge technology",
    imageUrl: "https://images.unsplash.com/photo-1555066931-bf19f8e1083d",
  },
  {
    href: "#marketing",
    title: "Digital Marketing",
    description: "SEO and marketing strategies that drive results",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  
];

export function App() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="relative font-[Lexend] text-[#023157] overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header scrollToPricing={scrollToPricing} scrollToServices={scrollToServices} scrollToContact={scrollToContact} />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <HeroSection />

                  <div className="py-14 bg-[#023157]">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-4xl font-bold text-white ">
                        Build{" "}
                        <FlipWords
                          words={[
                            "modern",
                            "better",
                            "cute",
                            "beautiful",
                            "clean",
                          ]}
                          duration={2000}
                          className="text-[#6fa8d6]"
                        />{" "}
                        websites with EVOLO
                      </h2>
                    </div>
                  </div>

                  <ValueProposition />
                  <section ref={servicesRef}>
                    <StickyScroll content={stickyScrollContent} />
                  </section>
                  <Testimonials />
                  <CTASection />
                  <TechWeUse />
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
            <Route path="/services" element={<div>Services Page</div>} />
         
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
