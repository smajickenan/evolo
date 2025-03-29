import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { StickyScroll } from './components/ui/StickyScroll';
import { Compare } from '../src/components/ui/Compare';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LinkPreview } from './components/ui/LinkPreview';

const stickyScrollContent = [
  {
    title: "Modern Design",
    description: "We create stunning, modern websites that capture your brand's essence and engage your visitors with cutting-edge design principles.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
          alt="Modern Design" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "Responsive Development",
    description: "Every website we build is fully responsive, ensuring a perfect experience across all devices and screen sizes.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1594751543129-6701ad444259" 
          alt="Responsive Design" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "Performance Optimization",
    description: "We optimize every aspect of your website to ensure fast loading times and smooth performance, keeping your visitors engaged.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e" 
          alt="Performance" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "SEO Excellence",
    description: "Our websites are built with SEO best practices to ensure your business ranks high in search results and reaches more customers.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
          alt="SEO Excellence" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "E-commerce Solutions",
    description: "We create powerful e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1557821552-17105176677c" 
          alt="E-commerce Solutions" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "Custom Functionality",
    description: "We develop custom features and functionality tailored to your business needs, ensuring your website stands out from the competition.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1555066931-bf19f8e1083d" 
          alt="Custom Functionality" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "Analytics Integration",
    description: "We integrate powerful analytics tools to help you track and optimize your website's performance and user engagement.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
          alt="Analytics Integration" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  },
  {
    title: "Security & Maintenance",
    description: "We ensure your website is secure and regularly maintained, protecting your business and providing peace of mind.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1555066931-bf19f8e1083d" 
          alt="Security & Maintenance" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    )
  }
];

const linkPreviews = [
  {
    href: "#web-design",
    title: "Web Design",
    description: "Modern, responsive designs that capture your brand's essence",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    href: "#development",
    title: "Development",
    description: "Custom web applications built with cutting-edge technology",
    imageUrl: "https://images.unsplash.com/photo-1555066931-bf19f8e1083d"
  },
  {
    href: "#marketing",
    title: "Digital Marketing",
    description: "SEO and marketing strategies that drive results",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  }
];

export function App() {
  return (
    <Router>
      <div className="relative font-[Lexend] text-[#023157] overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <HeroSection />
                <ValueProposition />
                <div className="py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Our Expertise
                    </h2>
                    <p className="text-lg text-[#023157]/80 max-w-3xl mx-auto">
                      Discover how we transform your online presence with cutting-edge solutions.
                    </p>
                  </div>
                  <StickyScroll content={stickyScrollContent} />
                </div>
                <Testimonials />
                <CTASection />
                <section className="py-16 bg-white/80">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technologies We Use
                      </h2>
                      <p className="text-lg text-[#023157]/80 max-w-3xl mx-auto">
                        Hover over each technology to learn more about our development stack.
                      </p>
                    </div>
                    <LinkPreview />
                  </div>
                </section>
              </main>
            } />
            <Route path="/about" element={<div>About Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}