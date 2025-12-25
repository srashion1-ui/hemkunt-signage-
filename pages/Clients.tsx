import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">Our <span className="text-brand">Clients</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">We are proud to have worked with some of the most reputable brands.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
           {CLIENT_LOGOS.map((logo, i) => (
             <div key={i} className="bg-white p-8 flex items-center justify-center h-40 rounded hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">
               <img src={logo} alt={`Client ${i}`} className="max-h-20 max-w-full grayscale hover:grayscale-0 transition-all duration-300" />
             </div>
           ))}
           {/* Duplicate for demo filling */}
           {CLIENT_LOGOS.map((logo, i) => (
             <div key={`d-${i}`} className="bg-white p-8 flex items-center justify-center h-40 rounded hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">
               <img src={logo} alt={`Client ${i}`} className="max-h-20 max-w-full grayscale hover:grayscale-0 transition-all duration-300" />
             </div>
           ))}
        </div>
        
        <div className="mt-20 text-center">
           <h3 className="text-2xl font-bold mb-6">Join our list of satisfied clients</h3>
           <button className="bg-brand-red text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
             Contact Us Today
           </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;