import React from 'react';
import { MailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#edf0f2] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-semibold text-[#023157]">Evolo</span>
            <p className="mt-2 text-sm text-[#023157]/80">
              Transform your business with a website that stands out.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MailIcon size={16} className="mr-2 text-[#6fa8d6]" />
                <a href="mailto:eli.jerome2@gmail.com" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  eli.jerome2@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={16} className="mr-2 text-[#6fa8d6]" />
                <a href="tel:5615040590" className="text-[#023157]/80 hover:text-[#6fa8d6]">
                  561-504-0590
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#023157] hover:text-[#6fa8d6]">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-[#023157] hover:text-[#6fa8d6]">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="text-[#023157] hover:text-[#6fa8d6]">
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-[#023157]/60">
          <p>&copy; {new Date().getFullYear()} Evolo. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-[#6fa8d6]">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-[#6fa8d6]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};