import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from './Footer';

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
  return (
    <div className="flex flex-col h-[100vh]">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <AnimatedSection />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow relative z-10">
        {/* Content Container */}
        <div className="pt-24 md:pt-32">
          {/* Hero Section */}
          <section className="w-full h-auto py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 flex flex-col items-center text-center">
              <div className="max-w-lg">
                <h1 className="font-libre text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
                  ABOUT
                 
                  <span className="text-white font-libre">
                  &nbsp;
                  EVOLO
                  </span>
                </h1>
                <p className="text-white mt-6 text-lg md:text-xl">
                  Our story and mission to help businesses <br/ >thrive in the digital world.
                </p>
              </div>
            </div>
          </section>

          {/* Two-Column Content Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              <div className="backdrop-blur-sm bg-black/10 p-8 md:p-12 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  {/* Left Column - Main Content */}
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-8"
                    >
                      <div>
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                          At Evolo, we believe that a great business deserves a great online presence. That's why we started this company—to help businesses evolve and thrive in an increasingly digital world. Our name comes from that same idea: "Evolo" is short for evolution—because that's what we bring to your brand.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                          After seeing how much a simple website upgrade could impact small businesses, we knew we were onto something. What started as a few local projects quickly grew into a mission to give business owners the modern tools they need to stand out, stay competitive, and grow.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-white text-lg md:text-xl leading-relaxed">
                          Today, we bring that same personal, hands-on approach to every project. From design and development to optimization and support, our U.S.-based team makes the process easy, collaborative, and effective.
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-white text-lg md:text-xl leading-relaxed font-semibold">
                          With Evolo, you won't just get a website—you'll get a partner who's invested in your growth.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Column - Values Section */}
                  <div>
                    <h2 className="font-libre text-white text-3xl md:text-4xl lg:text-5xl mb-8 text-center lg:text-left">
                      Our Values
                    </h2>
                    
                    <div className="space-y-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="backdrop-blur-sm bg-black/20 p-6 rounded-xl"
                      >
                        <h3 className="font-libre text-white text-xl md:text-2xl mb-4">Personal Approach</h3>
                        <p className="text-white/90">
                          We believe in face-to-face communication and building genuine relationships with our clients.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="backdrop-blur-sm bg-black/20 p-6 rounded-xl"
                      >
                        <h3 className="font-libre text-white text-xl md:text-2xl mb-4">Results-Driven</h3>
                        <p className="text-white/90">
                          We focus on creating websites that not only look great but also drive real business growth.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="backdrop-blur-sm bg-black/20 p-6 rounded-xl"
                      >
                        <h3 className="font-libre text-white text-xl md:text-2xl mb-4">Transparency</h3>
                        <p className="text-white/90">
                          We believe in clear communication, straightforward pricing, and keeping you informed every step of the way.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="backdrop-blur-sm bg-black/20 p-6 rounded-xl"
                      >
                        <h3 className="font-libre text-white text-xl md:text-2xl mb-4">Continuous Support</h3>
                        <p className="text-white/90">
                          Your success is our success. We provide ongoing support to help your online presence evolve with your business.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs; 