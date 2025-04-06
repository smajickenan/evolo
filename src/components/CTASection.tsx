import { motion } from 'framer-motion';

const CTASection  = () => {
  return (
    <section className="relative py-32 overflow-hidden flex justify-center">
      <div className="w-[70vw] relative rounded-2xl overflow-hidden">
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
            className="absolute w-[300px] h-[300px] rounded-full"
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
            className="absolute w-[200px] h-[200px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,204,51,0.15) 0%, rgba(255,204,51,0) 70%)',
              top: '30%',
              right: '10%',
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute w-[250px] h-[250px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(153,51,255,0.1) 0%, rgba(153,51,255,0) 70%)',
              top: '20%',
              left: '40%',
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1530]/80 to-transparent z-10"></div>
        
        <div className="relative z-20 p-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#0c1a39]"
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
          <div className="flex items-center justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="ml-2 text-white font-semibold text-xl">50+ clients reviewed</span>
          </div>
          <p className="text-center text-white font-semibold text-xl mb-6">
            "He assisted perfectly well in our project and delivered a great
            result."
          </p>
          <h3 className="font-libre text-3xl md:text-4xl lg:text-7xl text-white font-extrabold text-xl text-center mb-4 max-w-5xl mx-auto leading-tight">
            It's time to convert your website into a money-making business asset.
          </h3>
          <div className="flex justify-center mt-8">
            <button className="bg-white hover:bg-gray-100 text-[#08183e] font-extrabold py-3 px-6 border border-gray-200 rounded-xl transition-colors">
              Get a Free Website Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTASection
