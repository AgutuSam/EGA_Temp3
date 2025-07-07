import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, BookOpen, Tv, Users } from 'lucide-react';

export const MobileNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-dark border-t border-neon-cyan/20 z-50">
      <div className="grid grid-cols-5 h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isActive('/') ? 'text-neon-cyan' : 'text-noir-300 hover:text-neon-cyan'
          }`}
        >
          <Home size={20} />
          <span className="text-xs mt-1 font-manrope">Home</span>
        </Link>
        
        <Link 
          to="/programs" 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isActive('/programs') ? 'text-neon-cyan' : 'text-noir-300 hover:text-neon-cyan'
          }`}
        >
          <BookOpen size={20} />
          <span className="text-xs mt-1 font-manrope">Programs</span>
        </Link>
        
        <Link 
          to="/facilities" 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isActive('/facilities') ? 'text-neon-cyan' : 'text-noir-300 hover:text-neon-cyan'
          }`}
        >
          <Tv size={20} />
          <span className="text-xs mt-1 font-manrope">Technology</span>
        </Link>
        
        <Link 
          to="/coaches" 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isActive('/coaches') ? 'text-neon-cyan' : 'text-noir-300 hover:text-neon-cyan'
          }`}
        >
          <Users size={20} />
          <span className="text-xs mt-1 font-manrope">Coaches</span>
        </Link>
        
        <Link 
          to="/contact" 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isActive('/contact') ? 'text-neon-cyan' : 'text-noir-300 hover:text-neon-cyan'
          }`}
        >
          <Info size={20} />
          <span className="text-xs mt-1 font-manrope">Contact</span>
        </Link>
      </div>
    </nav>
  );
};
