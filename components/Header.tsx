
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants.tsx';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, isPage?: boolean) => {
    setMobileMenuOpen(false);
    if (isPage) {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 py-3 shadow-2xl backdrop-blur-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="cursor-pointer flex flex-col group"
          onClick={() => handleNavClick('home', true)}
        >
          <span className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none group-hover:text-brand transition-colors">Hemkunt</span>
          <span className="text-sm md:text-base text-gray-400 tracking-[0.4em] uppercase leading-none group-hover:text-white transition-colors">Signage</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id, item.isPage)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand relative pb-1 ${
                activePage === item.id ? 'text-brand' : 'text-white/70'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-x-0 top-[100%] bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'
      }`}>
        <div className="container mx-auto px-6 flex flex-col space-y-6">
           {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id, item.isPage)}
              className={`text-lg font-bold uppercase tracking-widest text-left transition-colors ${
                activePage === item.id ? 'text-brand' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
