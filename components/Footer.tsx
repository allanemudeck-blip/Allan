import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-6 h-6 text-neon-blue" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              ALLANZ <span className="text-gold-400">DIGITAL</span>
            </span>
          </div>
          
          <p className="text-gray-400 max-w-md text-sm mb-8 font-body">
            Bringing your brand to life through creative digital design, premium video production, and strategic branding solutions.
          </p>

          <div className="flex space-x-6 mb-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-neon-blue text-sm font-display uppercase tracking-wider transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Allanz Digital. All rights reserved. Kampala, Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;