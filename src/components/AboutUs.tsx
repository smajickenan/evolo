import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { IconClock, IconUsers, IconBuildingStore, IconRocket, IconBulb, IconTools, IconHeartHandshake, IconChecks } from '@tabler/icons-react';
import { LazyImage } from './ui/LazyImage';

const AnimatedSection = ({ isRight = false }) => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(155deg, #FF3366 0%, #FF9933 15%, #FFCC33 30%, #9933FF 50%, #FF3366 65%, #33CCFF 80%, #FF3366 95%)",
            "linear-gradient(155deg, #33CCFF 0%, #FF3366 15%, #FF9933 30%, #FFCC33 50%, #9933FF 65%, #FF3366 80%, #33CCFF 95%)",
            "linear-gradient(155deg, #9933FF 0%, #33CCFF 15%, #FF3366 30%, #FF9933 50%, #FFCC33 65%, #9933FF 80%, #33CCFF 95%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  );
};

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('meteors-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <AnimatedSection />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-grow">
        <div className="pt-12 md:pt-8">
          {/* Hero Section */}
          <section className="w-full py-8 md:py-12 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-libre text-center lg:text-left text-[#08183e] font-bold mb-4">
                    We Help Great Businesses<br className="hidden lg:block" />
                    <span className="text-white font-black">Evol</span><span className="text-[#08183e]">ve</span> <span className="text-white font-black">O</span><span className="text-[#08183e]">nline</span>
                  </h1>
                  <p className="text-base lg:text-xl font-bold text-[#08183e] mb-6 text-center lg:text-left max-w-2xl">
                    At Evolo, we believe that a great business deserves a great online presence. That's why we started this company—to help businesses evolve and thrive in an increasingly digital world. Our name comes from that same idea: "Evolo" is short for evolution—because that's what we bring to your brand.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <button 
                      onClick={handleContactClick}
                      className="bg-[#08183e] text-white px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
                    >
                      Let's Work Together
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-full flex items-center justify-end">
                  <div className="w-full lg:w-[150%] relative right-0">
                    <LazyImage 
                      src="/laptop.png" 
                      alt="Laptop Preview" 
                      className="w-full h-auto object-contain translate-x-[10%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl font-libre text-center text-[#08183e] font-black mb-8">Our Story</h2>
              
              <div className="max-w-4xl mx-auto mb-16 backdrop-blur-sm bg-white/10 rounded-xl p-8">
                <p className="text-[#08183e] text-lg md:text-xl mb-8">
                  After seeing how much a simple website upgrade could impact small businesses, we knew we were onto something. What started as a few local projects quickly grew into a mission to give business owners the modern tools they need to stand out, stay competitive, and grow.
                </p>
                <p className="text-[#08183e] text-lg md:text-xl mb-8">
                  Today, we bring that same personal, hands-on approach to every project. From design and development to optimization and support, our U.S.-based team makes the process easy, collaborative, and effective.
                </p>
                <p className="text-[#08183e] text-lg md:text-xl font-semibold">
                  With Evolo, you won't just get a website—you'll get a partner who's invested in your growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconBulb size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e] ">Why We Exist</h3>
                  <p className="text-[#08183e]">
                    We started Evolo to help businesses grow through better online presence.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconRocket size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4text-[#08183e]">What Evolo Means</h3>
                  <p className="text-[#08183e]">
                    Our name comes from evolution—it's what we bring to every client.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconBuildingStore size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Where We Started</h3>
                  <p className="text-[#08183e]">
                    We began by helping local businesses upgrade and evolve their websites.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Work Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl font-libre text-center font-black text-[#08183e] mb-16">How We Work</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconHeartHandshake size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Face to Face Communication</h3>
                  <p className="text-[#08183e]">
                    We believe in building genuine relationships with our clients.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconTools size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Fully Custom Builds</h3>
                  <p className="text-[#08183e]">
                    Every website is uniquely designed for your specific needs.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconRocket size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Built for Growth</h3>
                  <p className="text-[#08183e]">
                    We focus on creating websites that drive real business results.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconChecks size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Always Transparent</h3>
                  <p className="text-[#08183e]">
                    Clear communication and straightforward pricing.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconUsers size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">From Start to Support</h3>
                  <p className="text-[#08183e]">
                    We're with you through the entire journey.
                  </p>
                </div>

                <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-6">
                    <IconClock size={48} className="text-[#08183e]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#08183e]">Continuous Support</h3>
                  <p className="text-[#08183e]">
                    Ongoing support to help your online presence evolve.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center backdrop-blur-sm bg-white/10 rounded-xl p-12">
              <h2 className="text-4xl font-libre text-[#08183e] mb-8">
                Let's Build Something Better, Together.
              </h2>
              <button 
                onClick={handleContactClick}
                className="bg-[#08183e] text-white px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Let's Work Together
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 