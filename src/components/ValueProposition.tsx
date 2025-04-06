import React from 'react';
import { Users2Icon, PackageIcon, VideoIcon } from 'lucide-react';
export const ValueProposition = () => {
  const values = [{
    icon: <Users2Icon size={32} className="text-[#6fa8d6]" />,
    title: 'American-Based Team',
    description: 'Work directly with our experienced, U.S.-based team.'
  }, {
    icon: <PackageIcon size={32} className="text-[#6fa8d6]" />,
    title: 'End-to-End Service',
    description: 'From design and development to SEO and marketing, Evolo handles it all.'
  }, {
    icon: <VideoIcon size={32} className="text-[#6fa8d6]" />,
    title: 'Face-to-Face Interaction',
    description: 'Personal meetings to ensure your website matches your vision perfectly.'
  }];
  return <section className="py-16  bg-[#023157]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-[#023157]/80">{value.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};