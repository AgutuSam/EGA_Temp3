import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Facilities } from './pages/Facilities';
import { Coaches } from './pages/Coaches';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Set loaded state after a brief delay for smooth animations
    setTimeout(() => setIsLoaded(true), 100);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Add reveal animations to elements after theme change
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-noir-gradient text-noir-50' 
          : 'bg-gradient-to-br from-noir-50 to-noir-100 text-noir-900'
      } ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow relative overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        
        {isMobile && <MobileNav />}
      </div>
    </Router>
  );
}