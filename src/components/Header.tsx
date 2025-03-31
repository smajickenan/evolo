import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeaderProps {
  scrollToPricing: () => void;
  scrollToServices: () => void;
  scrollToContact: () => void;
}

export function Header({ scrollToPricing, scrollToServices, scrollToContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-xs shadow-md'
          : 'bg-white/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-[#023157] tracking-tight hover:text-[#023157]/90 transition-all duration-300">
              Evolo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              to="/"
              className="relative text-[#023157] text-xl font-semibold group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="relative text-[#023157] text-xl font-semibold group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/services"
              className="relative text-[#023157] text-xl font-semibold group"
              onClick={(e) => {
                e.preventDefault();
                scrollToServices();
              }}
            >
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={scrollToPricing}
              className="relative text-[#023157] text-xl font-semibold group"
            >
              <span className="relative z-10">Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={scrollToContact}
              className="relative text-[#023157] text-xl font-semibold group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link
              to="/contact"
              className="bg-[#023157] text-white px-8 py-2.5 rounded-full hover:bg-[#023157]/90 transition-all duration-300 text-l font-semibold hover:shadow-lg hover:shadow-[#023157]/20 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#023157]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/80 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-[#023157] hover:text-[#023157]/80 transition-all duration-300 text-xl font-semibold hover:bg-[#023157]/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-[#023157] hover:text-[#023157]/80 transition-all duration-300 text-xl font-semibold hover:bg-[#023157]/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-[#023157] hover:text-[#023157]/80 transition-all duration-300 text-xl font-semibold hover:bg-[#023157]/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[#023157] hover:text-[#023157]/80 transition-all duration-300 text-xl font-semibold hover:bg-[#023157]/5 rounded-lg"
                >
                  Contact
                </button>
                <Link
                  to="/contact"
                  className="block px-3 py-2 bg-[#023157] text-white rounded-full hover:bg-[#023157]/90 transition-all duration-300 text-center text-xl font-semibold hover:shadow-lg hover:shadow-[#023157]/20 hover:-translate-y-0.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}