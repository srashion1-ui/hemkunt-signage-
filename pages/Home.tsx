import React, { useState, useEffect } from 'react';
import { SERVICES, PRODUCTS, TESTIMONIALS, CLIENT_LOGOS, HIGHLIGHTS } from '../constants';
import { Play, ArrowRight } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % PRODUCTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center bg-black pt-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/50 to-black"></div>

        <div className="container mx-auto px-4 z-20 text-center mt-10 md:mt-0 animate-fade-in">
          <h2 className="text-brand font-bold text-sm md:text-base tracking-[0.2em] mb-4 animate-slide-up">PREMIUM BRANDING EXPERTS</h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase leading-tight mb-8 max-w-6xl mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <span className="block animate-blur-in">WE BUILD SIGNS</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand via-yellow-200 to-brand-red bg-[length:300%_auto] animate-gradient pb-2">THAT BUILD BRANDS</span>
          </h1>
          
          <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.5s'}}>
            We create high-quality signs that make your business look great. From design to installation across India, we take care of everything to help your brand get noticed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => setActivePage('services')}
                className="group bg-gray-900/80 backdrop-blur-md p-8 rounded-sm border-b-4 border-transparent hover:border-brand transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center shadow-xl"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand transition-colors text-white group-hover:text-black">
                  <service.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm text-center hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="bg-brand-red text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(225,29,72,0.4)] animate-pulse hover:animate-none"
          >
            Discover More
          </button>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
             <div className="w-20 h-1 bg-brand mb-8"></div>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase mb-6">The Hemkunt Difference</h2>
             <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-12">
               With decades of expertise in the visual communication industry, Hemkunt Signage stands at the forefront of brand implementation. 
               We combine precision engineering with creative design to deliver signage that not only looks spectacular but endures the test of time. 
               Our state-of-the-art manufacturing facility in Delhi allows us to maintain strict quality control and deliver on tight timelines.
             </p>
             
             <div className="relative group cursor-pointer mb-12" onClick={() => setActivePage('about')}>
               <div className="w-24 h-24 rounded-full border-2 border-brand/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                 <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                    <Play className="fill-black text-black ml-1" size={24} />
                 </div>
               </div>
               <div className="absolute top-0 left-0 w-full h-full rounded-full border border-brand animate-ping opacity-20"></div>
             </div>

             <button 
                onClick={() => setActivePage('about')}
                className="bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm shadow-lg"
             >
               Read Our Story
             </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION (Why Choose Us) */}
      <section className="py-24 bg-zinc-900 relative">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-brand font-bold tracking-widest uppercase mb-2">Why Choose Us?</h2>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-6">Excellence in Every Detail</h3>
                <div className="w-20 h-1 bg-brand mx-auto mb-6"></div>
                <p className="text-gray-400">We don't just build signs; we build trust through quality, reliability, and decades of expertise.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {HIGHLIGHTS.map((item, index) => (
                    <div key={index} className="group bg-black p-8 rounded-2xl border border-white/5 hover:border-brand/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 group-hover:bg-brand/10"></div>
                        
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-brand group-hover:text-black transition-colors duration-300 relative z-10 shadow-lg">
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL SECTION */}
      <section id="products" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase text-center mb-4">Featured Products</h2>
           <div className="w-20 h-1 bg-brand mx-auto mb-16"></div>

           <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]">
             
             {/* Image Side */}
             <div className="md:w-1/2 relative bg-black h-80 md:h-auto overflow-hidden group">
                {PRODUCTS.map((product, index) => (
                  <img 
                    key={product.id}
                    src={product.image} 
                    alt={product.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      index === activeProduct ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
             </div>

             {/* Content Side */}
             <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-gray-50 relative">
               
               {/* Vertical Navigation Dots */}
               <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
                  {PRODUCTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveProduct(idx)}
                      className={`w-2 rounded-full transition-all duration-500 ease-in-out ${
                        idx === activeProduct 
                          ? 'h-8 bg-brand-red shadow-[0_0_10px_rgba(225,29,72,0.5)]' 
                          : 'h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`View product ${idx + 1}`}
                    />
                  ))}
               </div>

               {/* Text Content */}
               <div className="pr-8">
                 {PRODUCTS.map((product, index) => {
                   if (index !== activeProduct) return null;
                   return (
                     <div key={product.id} className="animate-fade-in">
                       <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase border-l-4 border-brand pl-4 animate-slide-up">
                         {product.title}
                       </h3>
                       <p className="text-gray-600 leading-relaxed mb-8 text-lg animate-slide-up" style={{animationDelay: '0.1s'}}>
                         {product.description}
                       </p>
                       
                       <button 
                        onClick={() => setActivePage('products')}
                        className="bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-colors uppercase tracking-wider text-sm shadow-lg animate-slide-up hover:shadow-xl transform active:scale-95 origin-left"
                        style={{animationDelay: '0.2s'}}
                       >
                         View All
                       </button>
                     </div>
                   );
                 })}
               </div>

             </div>
           </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section id="clients" className="py-20 bg-black">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase mb-4">Trusted By Industry Leaders</h2>
            <div className="w-20 h-1 bg-brand mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-400 mb-12">
              From multinational corporations to local retail giants, we have successfully delivered branding solutions for diverse sectors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
               {CLIENT_LOGOS.slice(0, 10).map((logo, i) => (
                 <div key={i} className="bg-white p-4 flex items-center justify-center h-24 hover:scale-105 transition-transform rounded-sm">
                   <img src={logo} alt={`Client ${i}`} className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
                 </div>
               ))}
            </div>

            <button 
              onClick={() => setActivePage('clients')}
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm shadow-lg"
            >
               View All Clients
            </button>
         </div>
      </section>

      {/* PARTNER BANNER */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase leading-tight mb-8">
             YOUR PARTNER IN REMARKABLE <span className="text-brand">BRAND EXPERIENCES</span>
           </h2>
           <p className="max-w-4xl mx-auto text-gray-300 mb-12 leading-relaxed text-lg">
             Your brand is your business's most valuable asset. It's the first thing people see and their lasting impression.
             Don't leave your brand's implementation to chance. Partner with Hemkunt Signage for precision, quality, and impact.
           </p>
           <button 
            onClick={() => setActivePage('contact')}
            className="border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold py-4 px-10 transition-colors uppercase tracking-wider text-sm"
           >
             Start Your Project
           </button>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-extrabold text-white uppercase mb-16">What Our Clients Say</h2>
           
           {/* Solar System UI for Testimonials */}
           <div className="relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center">
              
              {/* Central Active User */}
              <div className="relative z-20 flex flex-col items-center animate-fade-in">
                 <div className="w-32 h-32 rounded-full border-4 border-brand p-1 bg-black mb-6 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                    <img 
                      src={TESTIMONIALS[currentTestimonial].image} 
                      alt="Active Client" 
                      className="w-full h-full rounded-full object-cover"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">{TESTIMONIALS[currentTestimonial].name}</h3>
                 <div className="w-12 h-1 bg-brand mb-6"></div>
                 <p className="text-gray-300 italic max-w-lg text-lg">"{TESTIMONIALS[currentTestimonial].text}"</p>
              </div>

              {/* Orbiting Users (Decorative) */}
              <div className="absolute inset-0 z-10 hidden md:block animate-spin-slow" style={{ animationDuration: '60s' }}>
                 {TESTIMONIALS.map((t, i) => {
                   if (i === currentTestimonial) return null;
                   const angle = (i * (360 / TESTIMONIALS.length)) * (Math.PI / 180);
                   const radius = 250; // px
                   const x = Math.cos(angle) * radius;
                   const y = Math.sin(angle) * radius;
                   
                   return (
                     <div 
                       key={t.id}
                       className="absolute w-16 h-16 rounded-full border-2 border-gray-600 bg-black cursor-pointer hover:border-brand transition-colors transform hover:scale-125"
                       style={{ 
                         left: `calc(50% + ${x}px - 32px)`, 
                         top: `calc(50% + ${y}px - 32px)`,
                       }}
                       onClick={() => setCurrentTestimonial(i)}
                     >
                       <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover opacity-60 hover:opacity-100" />
                       
                       {/* Connection Line to Center */}
                       <div 
                        className="absolute top-1/2 left-1/2 h-[1px] bg-gray-800 -z-10 origin-left"
                        style={{ 
                          width: `${radius}px`,
                          transform: `rotate(${angle + 180}rad)` 
                        }}
                       ></div>
                     </div>
                   );
                 })}
              </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Home;