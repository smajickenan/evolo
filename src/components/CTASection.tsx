import { motion } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const scrollToMeteors = () => {
    const meteorsSection = document.getElementById('meteors-section');
    if (meteorsSection) {
      meteorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-8 sm:py-16 md:py-24 lg:py-32 overflow-hidden flex justify-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh]">
      <div className="w-[90vw] sm:w-[80vw] md:w-[75vw] lg:w-[70vw] relative rounded-2xl overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(155deg, #FF3366 0%, #FF9933 15%, #FFCC33 30%, #9933FF 50%, #FF3366 65%, #33CCFF 80%, #FF3366 95%)",
                "linear-gradient(155deg, #33CCFF 0%, #FF3366 15%, #FF9933 30%, #FFCC33 50%, #9933FF 65%, #FF3366 80%, #33CCFF 95%)",
                "linear-gradient(155deg, #9933FF 0%, #33CCFF 15%, #FF3366 30%, #FF9933 50%, #FFCC33 65%, #9933FF 80%, #33CCFF 95%)",
                "linear-gradient(155deg, #FFCC33 0%, #9933FF 15%, #33CCFF 30%, #FF3366 50%, #FF9933 65%, #FFCC33 80%, #FF3366 95%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          
          {/* Floating elements with vibrant colors */}
          <motion.div
            className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,51,102,0.15) 0%, rgba(255,51,102,0) 70%)',
              top: '10%',
              left: '30%',
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(153,51,255,0.15) 0%, rgba(153,51,255,0) 70%)',
              bottom: '20%',
              right: '20%',
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] lg:w-[270px] lg:h-[270px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(51,204,255,0.15) 0%, rgba(51,204,255,0) 70%)',
              top: '40%',
              right: '10%',
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-[#0a1530]/80 to-transparent z-10"></div>
        
        <div className="relative z-20 p-4 sm:p-6 md:p-8">
          <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
            <div className="bg-white rounded-full p-2 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0c1a39]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center mb-1 sm:mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-1 sm:ml-2 text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">50+ clients reviewed</span>
          </div>
          <p className="text-center text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            "They assisted perfectly with our project and delivered a great website"
          </p>
          <h3 className="font-libre text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-white font-extrabold text-center mb-2 sm:mb-3 md:mb-4 max-w-5xl mx-auto leading-tight">
            It's time to convert your website into a money-making business asset.
          </h3>
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
            <button 
              onClick={scrollToMeteors}
              className="bg-white hover:bg-gray-100 text-[#08183e] font-extrabold py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border border-gray-200 rounded-xl transition-colors text-sm sm:text-base"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection;
