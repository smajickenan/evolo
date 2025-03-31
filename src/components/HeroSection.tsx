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
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#023157] to-[#023157]/80">
          Transform Your Business with a Website That Stands Out.
          </h1>
          <p className="text-xl md:text-2xl text-[#023157]/70">
          At Evolo, we fully revamp your company's online footprint, creating modern, responsive, SEO-optimized websites that attract more customers.  </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#023157]/90 hover:bg-[#023157] text-white rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#023157]/20 hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-[#023157]/30 hover:border-[#023157]/50 text-[#023157]/90 hover:text-[#023157] rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg">
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-8xl font-bold text-[#023157]/30 z-10">HOVER</span>
            </div>
            <Compare
              firstImage="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              secondImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              firstImageClassName="object-cover object-top rounded-3xl"
              secondImageClassname="object-cover object-top rounded-3xl"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] mx-auto"
              slideMode="hover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};