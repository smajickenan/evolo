import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Compare } from './ui/Compare';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text  bg-gradient-to-r from-[#023157] to-[#023157]/80">
          Transform Your Business with a Website That Stands Out.
          </h1>
          <p className="text-xl md:text-2xl ">
          At Evolo, we fully revamp your company's online footprint, creating modern, responsive, SEO-optimized websites that attract more customers.  </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#023157] hover:bg-[#023157] text-white rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#023157]/20 hover:-translate-y-0.5">
             Learn More
            </button>
         
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-5xl mx-auto">
          
            <Compare
             firstImage="/bad-website.png"
             secondImage="/good-website.png" 
             firstImageClassName="object-contain object-top rounded-3xl"
              secondImageClassname="object-contain object-top rounded-3xl"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] mx-auto"
              slideMode="hover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};