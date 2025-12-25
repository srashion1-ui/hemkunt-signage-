
import React, { useState, useEffect } from 'react';
import { SERVICES, PRODUCTS, TESTIMONIALS, CLIENT_LOGOS, HIGHLIGHTS } from '../constants.tsx';
import { Play, ArrowRight, Star, Quote } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % PRODUCTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-black">
      
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 scale-110 animate-pulse-soft">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1563245372-f21d1396a7a4?q=80&w=2070&auto=format&fit=crop" 
            alt="Signage backdrop" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-6 z-20 text-center relative pt-20">
          <div className="inline-block mb-6 animate-slide-up">
            <span className="text-brand font-bold text-xs md:text-sm tracking-[0.5em] uppercase border-b-2 border-brand/30 pb-2">Crafting Visual Legacies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase leading-none mb-8 tracking-tighter">
            <span className="block animate-blur-in [animation-delay:0.2s]">PRECISION</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand via-yellow-200 to-brand-red bg-[length:200%_auto] animate-gradient pb-4 neon-text">SIGNAGE</span>
          </h1>
          
          <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up [animation-delay:0.4s] leading-relaxed">
            From the heart of Delhi to the skylines of India, we engineer high-impact visual identities that define modern brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up [animation-delay:0.6s]">
            <button 
              onClick={() => setActivePage('products')}
              className="group bg-brand text-black font-black py-5 px-10 rounded-full hover:bg-white transition-all uppercase tracking-[0.2em] text-sm flex items-center gap-3 neon-border"
            >
              Explore Products <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="group text-white font-bold py-5 px-10 rounded-full border border-white/20 hover:border-brand transition-all uppercase tracking-[0.2em] text-sm bg-white/5 backdrop-blur-sm"
            >
              Our Legacy
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto py-10 border-t border-white/10 animate-fade-in [animation-delay:0.8s]">
            {[
              { val: '42+', lab: 'Years Experience' },
              { val: '1000+', lab: 'Cities Covered' },
              { val: '5k+', lab: 'Projects Delivered' },
              { val: '100%', lab: 'In-House Fab' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-black text-brand">{stat.val}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.lab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW GRID */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Core Competencies</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">Mastering The Art Of <span className="text-white/40">Visual Impact</span></h3>
            </div>
            <button onClick={() => setActivePage('services')} className="text-brand font-black uppercase text-xs tracking-widest border-b border-brand pb-2 hover:text-white hover:border-white transition-all">
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-black p-12 overflow-hidden border border-white/5 hover:border-brand/20 transition-all duration-700 h-[400px] flex flex-col justify-end"
              >
                <div className="absolute top-12 left-12 text-brand/20 group-hover:text-brand transition-colors duration-500">
                  <service.icon size={64} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-brand transition-colors">{service.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop" alt="Hemkunt Factory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand/20 rounded-full blur-[120px] -z-0"></div>
              <div className="absolute bottom-10 -right-10 bg-brand p-12 rounded-2xl z-20 shadow-2xl hidden md:block">
                <span className="block text-4xl font-black text-black">42</span>
                <span className="block text-xs font-bold text-black uppercase tracking-widest">Years of Craft</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-6">Our Legacy</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-none">The standard of <span className="text-brand">Excellence</span> since 1982.</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Founded on the principles of precision engineering and aesthetic mastery, Hemkunt Signage has evolved from a local workshop into a pan-India branding powerhouse. We don't just manufacture signs; we build the landmarks that define your business's presence.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-sm">Quality Control</h4>
                  <p className="text-gray-500 text-sm">Rigorous multi-stage inspection for every single LED chip and structural weld.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase text-sm">Pan-India Support</h4>
                  <p className="text-gray-500 text-sm">A dedicated network of technicians across every major Indian territory.</p>
                </div>
              </div>
              <button 
                onClick={() => setActivePage('about')}
                className="bg-white text-black font-black py-4 px-10 rounded-full hover:bg-brand transition-colors uppercase tracking-widest text-xs"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT CAROUSEL */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden bg-white flex flex-col lg:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
            {/* Image Side */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative bg-black overflow-hidden">
               {PRODUCTS.map((product, idx) => (
                 <img 
                   key={idx}
                   src={product.image} 
                   alt={product.title}
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                     idx === activeProduct ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                   }`}
                 />
               ))}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white relative">
               <div className="flex gap-2 mb-8">
                 {PRODUCTS.map((_, idx) => (
                   <button 
                    key={idx}
                    onClick={() => setActiveProduct(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      idx === activeProduct ? 'w-12 bg-brand' : 'w-4 bg-gray-200 hover:bg-gray-300'
                    }`}
                   />
                 ))}
               </div>

               {PRODUCTS.map((product, idx) => (
                 <div key={idx} className={`${idx === activeProduct ? 'block animate-fade-in' : 'hidden'}`}>
                   <h3 className="text-3xl md:text-5xl font-black text-black uppercase mb-6 leading-tight">{product.title}</h3>
                   <p className="text-gray-600 text-lg leading-relaxed mb-10">{product.description}</p>
                   <button 
                    onClick={() => setActivePage('products')}
                    className="bg-black text-white font-black py-4 px-10 rounded-full hover:bg-brand hover:text-black transition-all uppercase tracking-widest text-xs"
                   >
                     Product Details
                   </button>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - SOLAR SYSTEM THEME */}
      <section className="py-32 bg-black relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-6">Client Success</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-20">Voices of <span className="text-white/30">Trust</span></h3>
            
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Central Panel */}
              <div className="bg-zinc-900 border border-white/10 p-10 md:p-16 rounded-[40px] max-w-2xl w-full z-20 shadow-2xl relative">
                <Quote className="text-brand/20 absolute -top-8 -left-8" size={80} />
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 rounded-full border-2 border-brand p-1 bg-black overflow-hidden shadow-lg">
                    <img src={TESTIMONIALS[currentTestimonial].image} alt="User" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed mb-8">"{TESTIMONIALS[currentTestimonial].text}"</p>
                <h4 className="text-xl font-bold text-brand uppercase tracking-widest">{TESTIMONIALS[currentTestimonial].name}</h4>
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand text-brand" />)}
                </div>
              </div>

              {/* Orbiting Icons (Desktop only for better UX) */}
              <div className="absolute inset-0 z-10 hidden lg:block animate-spin-slow">
                 {TESTIMONIALS.map((t, i) => {
                   if (i === currentTestimonial) return null;
                   const angle = (i * (360 / TESTIMONIALS.length)) * (Math.PI / 180);
                   const radius = 320;
                   const x = Math.cos(angle) * radius;
                   const y = Math.sin(angle) * radius;
                   
                   return (
                     <div 
                       key={i}
                       className="absolute w-20 h-20 rounded-full border-2 border-white/10 bg-zinc-900 cursor-pointer hover:border-brand transition-all transform hover:scale-125 z-30 group shadow-xl"
                       style={{ 
                         left: `calc(50% + ${x}px - 40px)`, 
                         top: `calc(50% + ${y}px - 40px)`,
                         animation: 'spin 12s linear infinite reverse'
                       }}
                       onClick={() => setCurrentTestimonial(i)}
                     >
                       <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100" />
                     </div>
                   );
                 })}
              </div>

              {/* Orbit Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border border-white/5 rounded-full z-0 hidden lg:block"></div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-black/10"></div>)}
          </div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-black text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter leading-none">Ready to <br/>Illuinate your brand?</h2>
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-black text-white font-black py-6 px-16 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-[0.3em] text-sm shadow-2xl"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
