import React from "react";

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="w-full py-20 px-6 md:px-12 bg-white/80 text-[#edf0f2] text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-[#08183e] sm:text-4xl md:text-6xl font-bold mb-6">
          Custom Quotes Only
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-10 leading-relaxed text-[#08183e]">
          Every Evolo project is unique and tailored specifically to your business goals.
          We offer free consultations and personalized quotes to ensure you receive exactly what you need.
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-[#08183e] text-[white] font-semibold rounded-xl shadow-md hover:bg-[#5b9ccc] transition-colors duration-300"
        >
          Request Your Free Custom Quote
        </a>
      </div>
    </section>
  );
};

export default Pricing;
