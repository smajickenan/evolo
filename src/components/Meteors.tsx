import React, { useState } from "react";
import { Meteors } from "../components/ui/meteors";

const MeteorsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:eli.jerome2@gmail.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-[80vh] sm:h-[70vh] flex items-center justify-center bg-white/80 py-8 sm:py-0">
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row h-full overflow-hidden rounded-2xl border border-gray-800 bg-[#023157] shadow-xl">
          {/* Left Column - Contact Info */}
          <div className="relative z-50 w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Contact Us</h1>
            
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <div className="text-white/80 text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 lg:mb-3">Email</div>
                <a href="mailto:eli.jerome2@gmail.com" className="text-[#6fa8d6] hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                  eli.jerome2@gmail.com
                </a>
              </div>

              <div>
                <div className="text-white/80 text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 lg:mb-3">Phone</div>
                <a href="tel:561-504-0590" className="text-[#6fa8d6] hover:text-white transition-colors text-base sm:text-lg lg:text-xl">
                  561-504-0590
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative z-10 w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1">
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
                <label htmlFor="email" className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1">
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
                <label htmlFor="phone" className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6fa8d6] focus:border-transparent text-sm sm:text-base"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block lg:text-xl sm:text-sm font-medium text-white/80 mb-1">
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
                className="w-full px-3 sm:px-4 py-2 bg-white text-[#023157] font-semibold rounded-lg hover:bg-[#5b9ccc] transition-colors duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}

export default MeteorsSection;
