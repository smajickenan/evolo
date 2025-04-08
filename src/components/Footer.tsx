import React from 'react';
import { MailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export const Footer = () => {
  const { openContactModal } = useModal();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#023157] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center">
              <img 
                src="/logo.png" 
                alt="Evolo Logo" 
                className="h-[90px] w-auto"
              />
            </div>
            <p className="mt-2 text-sm text-white/60">
              Transform your business with a website that stands out.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('meteors-section')} 
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={openContactModal}
                  className="text-white/60 hover:text-[#6fa8d6] transition-colors duration-300"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#web-design" className="text-white/60 hover:text-[#6fa8d6]">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#development" className="text-white/60 hover:text-[#6fa8d6]">
                  Development
                </a>
              </li>
              <li>
                <a href="#seo" className="text-white/60 hover:text-[#6fa8d6]">
                  SEO
                </a>
              </li>
              <li>
                <a href="#marketing" className="text-white/60 hover:text-[#6fa8d6]">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Social Networks</h3>
           
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-white/60 hover:text-[#6fa8d6]">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#6fa8d6]">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#6fa8d6]">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Evolo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};