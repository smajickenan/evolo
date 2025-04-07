import React from 'react';
import { motion } from 'framer-motion';
import { HeroParallax } from './ui/hero-parallax';


// Parallax products data
const parallaxProducts = [
  {
    title: "E-commerce Platform",
    link: "/portfolio/ecommerce",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Mobile App Design",
    link: "/portfolio/mobile-app",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Corporate Website",
    link: "/portfolio/corporate",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Brand Identity",
    link: "/portfolio/branding",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "SaaS Platform",
    link: "/portfolio/saas",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Marketing Campaign",
    link: "/portfolio/marketing",
    thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "UI/UX Design System",
    link: "/portfolio/design-system",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Content Strategy",
    link: "/portfolio/content",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "SEO Optimization",
    link: "/portfolio/seo",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Social Media Campaign",
    link: "/portfolio/social",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Email Marketing",
    link: "/portfolio/email",
    thumbnail: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Analytics Dashboard",
    link: "/portfolio/analytics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "User Research",
    link: "/portfolio/research",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "Prototype Development",
    link: "/portfolio/prototype",
    thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "A/B Testing",
    link: "/portfolio/testing",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"
  }
];

const Portfolio = () => {
  return (
    <section className="w-full py-10 relative bg-white/80">
    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-libre text-[#08183e] text-4xl sm:text-3xl lg:text-7xl font-extrabold  tracking-tight">
            Our Portfolio
          </h2>
          <p className="mt-4 text-base sm:text-xl font-popins text-[#08183e] max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        {/* Parallax Portfolio Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-libre  font-bold text-center mb-12 text-[#08183e]">
            Featured Projects
          </h3>
          <HeroParallax products={parallaxProducts} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 