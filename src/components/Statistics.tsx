import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  {
    percentage: "94%",
    description: "of first impressions about a business's credibility relate to its website's design.",
    source: "Stanford Web Credibility Study"
  },
  {
    percentage: "75%",
    description: "of consumers admit to judging a company's credibility solely by their website design.",
    source: "WebFX"
  },
  {
    percentage: "100x",
    description: "return on investment for every $1 spent on user experience (UX) improvements.",
    source: "Forbes"
  },
  {
    percentage: "400%",
    description: "higher conversions for websites with superior user experiences.",
    source: "Forrester Research"
  },
  {
    percentage: "75%",
    description: "of users never scroll past the first page of Google results, highlighting the critical importance of good SEO practices.",
    source: "HubSpot"
  },
  {
    percentage: "57%",
    description: "of internet users say they won't recommend a business with a poorly designed mobile website.",
    source: "Sweor"
  }
];

const Statistics = () => {
  return (
    <section className="w-full py-20 bg-white/80 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08183e] mb-6">
            The Impact of Great Web Design
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why investing in professional web design and development is crucial for your business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#08183e]/20 backdrop-blur-sm rounded-2xl hover:text-[white] p-6 sm:p-8 hover:bg-[#08183e]/90 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: index * 0.1 
                  }}
                  className="text-4xl sm:text-5xl font-bold text-[#6fa8d6]  mb-4"
                >
                  {stat.percentage}
                </motion.span>
                <p className=" hover:text-[white]  sm:text-lg mb-4 leading-relaxed">
                  {stat.description}
                </p>
                <span className="text-sm  italic hover:text-[white]">
                  Source: {stat.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; 