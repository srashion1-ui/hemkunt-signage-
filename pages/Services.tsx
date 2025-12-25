import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Header */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">Our <span className="text-brand">Services</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive branding and signage solutions tailored to your needs.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900 transition-colors border border-gray-800 hover:border-brand/50">
              <div className="md:w-1/4 flex flex-col items-center justify-center border-r border-gray-800 pr-8">
                 <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-brand mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <service.icon size={48} />
                 </div>
              </div>
              <div className="md:w-3/4">
                 <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                 <p className="text-gray-400 mb-6 leading-relaxed">
                   {service.description} We leverage top-tier technology and materials to ensure that this service meets the highest industry standards. 
                   Whether you are a small business or a large corporation, our team is dedicated to executing your vision with precision.
                 </p>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    <li className="flex items-center text-sm text-gray-300"><div className="w-2 h-2 bg-brand rounded-full mr-2"></div> Custom Design</li>
                    <li className="flex items-center text-sm text-gray-300"><div className="w-2 h-2 bg-brand rounded-full mr-2"></div> Fabrication</li>
                    <li className="flex items-center text-sm text-gray-300"><div className="w-2 h-2 bg-brand rounded-full mr-2"></div> Installation</li>
                    <li className="flex items-center text-sm text-gray-300"><div className="w-2 h-2 bg-brand rounded-full mr-2"></div> Maintenance</li>
                 </ul>
                 <button className="text-brand font-bold uppercase text-sm flex items-center hover:text-white transition-colors">
                   Get a Quote <ArrowRight size={16} className="ml-2" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;