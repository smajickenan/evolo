import React from 'react';
import { StarIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    quote: "Evolo completely revamped my site and my customers noticed immediately. Couldn't recommend enough!",
    author: 'Marney B.',
    stars: 5
  }, {
    quote: 'Finally, a team that explains things clearly and delivers results.',
    author: 'Anonymous',
    stars: 5
  }, {
    quote: "Our website traffic doubled after Evolo's redesign!",
    author: 'Jason S.',
    stars: 5
  }];
  return <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#023157]/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with Evolo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {Array.from({
              length: testimonial.stars
            }).map((_, i) => <StarIcon key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-semibold">— {testimonial.author}</p>
            </div>)}
        </div>
      </div>
    </section>;
};