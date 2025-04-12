import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

interface HeaderProps {
  scrollToPricing: () => void;
  scrollToServices: () => void;
  scrollToContact: () => void;
  scrollToPortfolio: () => void;
  scrollToFAQ: () => void;
}

export function Header({ scrollToPricing, scrollToServices, scrollToContact, scrollToPortfolio, scrollToFAQ }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openContactModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 20) {
        // At the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
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

  const handleNavigation = (action: () => void) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure the navigation happens before scrolling
      setTimeout(action, 100);
    } else {
      action();
    }
  };

  const scrollToMeteors = () => {
    const meteorsSection = document.getElementById('meteors-section');
    if (meteorsSection) {
      meteorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-md shadow-md'
          : 'bg-white/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            
            <span className="text-5xl font-extrabold text-[#0c1a39] tracking-tight hover:text-[#023157]/90 transition-all duration-300 md:-ml-4 lg:-ml-20">
             Evolo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
           
            <Link
              to="/about"
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal  font-semibold group"
            >
              <span className="font-popins relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={() => handleNavigation(scrollToServices)}
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal  font-semibold group"
            >
              <span className="font-popins relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation(scrollToPricing)}
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal  font-semibold group"
            >
              <span className="font-popins relative z-10">Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation(scrollToPortfolio)}
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal font-semibold group"
            >
              <span className="font-popins relative z-10">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation(scrollToFAQ)}
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal font-semibold group"
            >
              <span className="font-popins relative z-10">FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation(scrollToContact)}
              className="relative text-[#0c1a39] text-xl tracking-wide font-normal font-semibold group"
            >
              <span className="font-popins relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#023157] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={openContactModal}
              className="bg-[#023157] text-white px-6 py-2 rounded-full hover:bg-[#023157]/90 transition-all duration-300 font-semibold"
            >
              Contact us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#0c1a39] hover:bg-[#0c1a39]/10 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md"
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/about"
                className="block py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button
                onClick={() => {
                  handleNavigation(scrollToServices);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
              >
                Services
              </button>
              <button
                onClick={() => {
                  handleNavigation(scrollToPricing);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  handleNavigation(scrollToPortfolio);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  handleNavigation(scrollToFAQ);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  handleNavigation(scrollToContact);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-[#0c1a39] text-lg font-semibold hover:text-[#023157]"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  openContactModal();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#023157] text-white px-6 py-2 rounded-full hover:bg-[#023157]/90 transition-all duration-300 font-semibold mt-4"
              >
                Contact us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}