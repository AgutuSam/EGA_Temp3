import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-noir-950 text-noir-100 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-noir-950 via-noir-900 to-noir-950 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-neon-cyan to-electric-500 animate-pulse">
                <Zap className="text-noir-950" size={16} />
              </div>
              <h3 className="text-xl font-orbitron font-bold neon-text">
                Element Golf Academy
              </h3>
            </div>
            <p className="text-noir-300 font-manrope mb-4">
              Redefining golf performance through technology and mastery at
              Steyn City.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@elementgolf.com" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-exo font-semibold mb-4 text-neon-cyan">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Facilities
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-exo font-semibold mb-4 text-neon-gold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Junior Development
                </a>
              </li>
              <li>
                <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Elite Training
                </a>
              </li>
              <li>
                <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Private Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-noir-300 hover:text-neon-cyan transition-colors duration-300 font-manrope">
                  Corporate Events
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-exo font-semibold mb-4 text-neon-cyan">Newsletter</h3>
            <p className="text-noir-300 font-manrope mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-noir-800 border border-neon-cyan/30 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan text-noir-100 placeholder-noir-400 font-manrope"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-neon-cyan to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-noir-950 font-exo font-semibold py-2 px-4 rounded transition-all duration-300 shadow-neon hover:shadow-neon-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neon-cyan/20 mt-8 pt-8 text-center text-noir-400">
          <p className="font-manrope">
            &copy; {new Date().getFullYear()} Element Golf Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
