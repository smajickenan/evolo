import React from 'react';
export const CTASection = () => {
  return <section className="py-16 bg-[#023157] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a website transformation?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Take the first step toward a website that truly represents your
          business and attracts more customers.
        </p>
        <a href="#consultation" className="inline-block bg-white text-[#023157] px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
          Book Your Free Consultation
        </a>
      </div>
    </section>;
};