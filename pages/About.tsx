import React from 'react';
import { Play, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Header */}
      <div className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tighter">About <span className="text-brand">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Discover the passion, precision, and people behind Hemkunt Signage.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-1 bg-brand mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
              Crafting <span className="text-brand">Identities</span> Since Inception
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Hemkunt Signage has established itself as a premier name in the visual communication industry. What started as a vision to provide high-quality signage has grown into a comprehensive manufacturing and branding solution provider.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Based in Delhi, we operate a fully equipped manufacturing facility capable of handling large-scale rollouts across India. Our expertise spans from high-precision LED channel letters to massive structural pylons. We don't just make signs; we engineer brand experiences that ensure you stand out in a crowded marketplace.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded border-l-4 border-brand">
                <h3 className="text-3xl font-black text-white mb-2">20+</h3>
                <p className="text-gray-500 text-sm uppercase">Years Excellence</p>
              </div>
              <div className="bg-gray-900 p-6 rounded border-l-4 border-brand">
                <h3 className="text-3xl font-black text-white mb-2">1000+</h3>
                <p className="text-gray-500 text-sm uppercase">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden relative shadow-2xl">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                  <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                     <Play className="fill-black text-black ml-1" size={32} />
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand -z-10 rounded-lg"></div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
           <div className="bg-gray-900 p-8 rounded hover:bg-gray-800 transition-colors border-t-2 border-transparent hover:border-brand">
              <Award className="text-brand mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">To be the national benchmark in the signage industry, recognized for our commitment to quality innovation and client satisfaction.</p>
           </div>
           <div className="bg-gray-900 p-8 rounded hover:bg-gray-800 transition-colors border-t-2 border-transparent hover:border-brand">
              <Users className="text-brand mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">To empower businesses by providing superior branding solutions that enhance visibility and drive growth through creative excellence.</p>
           </div>
           <div className="bg-gray-900 p-8 rounded hover:bg-gray-800 transition-colors border-t-2 border-transparent hover:border-brand">
              <Globe className="text-brand mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Our Reach</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Serving clients pan-India with a dedicated network for logistics, installation, and maintenance support.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;