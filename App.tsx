
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Loader from './components/Loader.tsx';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Products from './pages/Products.tsx';
import Clients from './pages/Clients.tsx';
import Careers from './pages/Careers.tsx';
import Shop from './pages/Shop.tsx';
import AIAssistant from './components/AIAssistant.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'contact': return <Contact />;
      case 'services': return <Services />;
      case 'about': return <About />;
      case 'products': return <Products setActivePage={setActivePage} />;
      case 'clients': return <Clients />;
      case 'careers': return <Careers />;
      case 'shop': return <Shop />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-white">
      {loading && <Loader />}
      
      {!loading && (
        <div className="animate-fade-in">
          <Header activePage={activePage} setActivePage={setActivePage} />
          
          <main className="min-h-screen">
            {renderPage()}
          </main>

          <Footer />
          <AIAssistant />
          
          {/* Scroll to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 bg-gray-800/80 backdrop-blur-md p-3 rounded-full border border-gray-700 hover:bg-brand hover:text-black transition-all"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
