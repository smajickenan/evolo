import React from 'react';
import { motion } from 'framer-motion';
import { HeroParallax } from './ui/hero-parallax';

// Parallax products data
const parallaxProducts = [
  {
    title: "Pet Care Platform",

    thumbnail: "/pet.webp"
  },
  {
    title: "Corporate Website",
  
    thumbnail: "/site1.png"
  },
  {
    title: "Pet Care Platform",
   
    thumbnail: "/india.webp"
  },
  {
    title: "Corporate Website",
   
    thumbnail: "/restaurant.webp"
  },
  {
    title: "Pet Care Platform",
   
    thumbnail: "/restaurant1.webp"
  },
  {
    title: "Corporate Website",
 
    thumbnail: "/robolabs.webp"
  },
  {
    title: "Pet Care Platform",
   
    thumbnail: "/site2.webp"
  },
  {
    title: "Corporate Website",

    thumbnail: "/site3.png"
  },
  {
    title: "Pet Care Platform",
   
    thumbnail: "/site4.webp"
  },
  {
    title: "Corporate Website",
    link: "/portfolio/corporate-5",
    thumbnail: "/site6.webp"
  }
  ,
  {
    title: "Corporate Website",
   
    thumbnail: "/truckers.webp"
  }
  ,
  {
    title: "Corporate Website",
  
    thumbnail: "/site7.webp"
  }
  ,
  {
    title: "Corporate Website",

    thumbnail: "/site9.png"
  }
  ,
  {
    title: "Corporate Website",
 
    thumbnail: "/site8.webp"
  }
  ,
  {
    title: "Corporate Website",
    
    thumbnail: "/truckers.webp"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-3 relative bg-white/80 ">
    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:pt-20">
        <div className="text-center mb-12">
          <h2 className="font-libre mb-20 text-[#08183e] text-4xl sm:text-3xl lg:text-7xl font-extrabold  tracking-tight">
          See the Evolo Difference
          </h2>
          <p className="mt-4 text-base sm:text-xl mb-20 font-popins text-[#08183e] max-w-2xl mx-auto">
          Browse our latest projects and discover how we've helped businesses dramatically enhance their online presence and achieve tangible growth. </p>
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