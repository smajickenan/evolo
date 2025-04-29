import React, { useState } from "react";
import { Meteors } from "../components/ui/meteors";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const MeteorsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await emailjs.send(
        'service_012e6fe',
        'template_8wzp2ma',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'NbWDI2v8K_njAE7JS'
      );

      if (result.status === 200) {
        alert('Message sent successfully!');
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      id="meteors-section"
      className="min-h-[80vh] sm:h-[70vh] flex items-center justify-center bg-white/80 py-8 sm:py-0"
    >
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row h-full overflow-hidden rounded-2xl border border-gray-800 bg-[#023157] shadow-xl">
          {/* Left Column - Contact Info */}
          <div className="relative z-50 w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
            Ready to Turn Your Website into Your Strongest Business Asset?
            </h1>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="text-white/80 text-sm sm:text-base lg:text-xl">
               Request a free
                website audit today and discover opportunities to enhance your
                online presence.
              
              </div>
              <div className="text-white/80 text-sm sm:text-base lg:text-xl">
                Our team will analyze your website and provide valuable insights on performance, SEO, and user experience.
              </div>
              
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative z-10 w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6fa8d6] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6fa8d6] focus:border-transparent text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6fa8d6] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6fa8d6] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-3 sm:px-4 py-2 bg-white text-[#023157] font-semibold rounded-lg transition-colors duration-300 text-sm sm:text-base ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#5b9ccc]'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
};

export default MeteorsSection;
