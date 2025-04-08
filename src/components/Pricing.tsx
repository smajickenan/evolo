import React from "react";

const Pricing: React.FC = () => {
  const scrollToMeteors = () => {
    const meteorsSection = document.getElementById('meteors-section');
    if (meteorsSection) {
      meteorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      className="w-full py-20 px-6 md:px-12 bg-white/80 text-[#edf0f2] text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-[#08183e] sm:text-4xl md:text-6xl font-bold mb-6">
        Tailored Quotes Just for You
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-10 leading-relaxed text-[#08183e]">
        At Evolo, every website is customized to perfectly match your goals and budget. Enjoy a free consultation and get your personalized, no-obligation quote today.  </p>

        <button
          onClick={scrollToMeteors}
          className="inline-block px-8 py-4 bg-[#08183e] text-[white] font-semibold rounded-xl shadow-md hover:bg-[#5b9ccc] transition-colors duration-300"
        >
       Get Your Custom Quote
        </button>
      </div>
    </section>
  );
};

export default Pricing;
