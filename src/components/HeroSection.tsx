import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Compare } from './ui/Compare';
import { useModal } from '../context/ModalContext';

export const HeroSection = () => {
  const { openContactModal } = useModal();
  
  return (
    <section className="relative min-h-[83vh] flex items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6 lg:space-y-8"
        >
          <h1 className="font-libre text-4xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-[#08183e]">
          Your Website Should Be Working Harder.<br/>
          <span className="font-cormorant italic text-3xl sm:text-4xl lg:text-5xl font-medium">Let's turn it into your best salesperson.</span> </h1>
          <p className="font-popins text-lg sm:text-xl lg:text-2xl text-[#08183e]">
          We're Evolo — a U.S. based team that transforms outdated websites into modern, revenue-driving machines. No confusing tech speak, no vanishing freelancers — just clear communication, sleek design, and results you can see. </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openContactModal}
              className="font-popins px-6 sm:px-8 py-2.5 sm:py-3 bg-[#08183e] hover:bg-[#023157] text-white rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#023157]/20 hover:-translate-y-0.5"
            >
              Get Your Free Quote
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
              className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] mx-auto"
              slideMode="auto"
              autoSpeed={3000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};