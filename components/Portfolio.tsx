import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Neon City Promo',
    category: 'Advert Video',
    imageUrl: 'https://images.unsplash.com/photo-1535242208474-9a2793260ca8?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Tech Summit 2024',
    category: 'Event Flyer',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'EcoBrand Profile',
    category: 'Company Profile',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    title: 'Urban Fashion',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    title: 'Executive Portrait',
    category: 'Photo Editing',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    title: 'Future Sound',
    category: 'Poster Design',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gold-400 font-display tracking-[0.2em] uppercase text-sm mb-2 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured <span className="text-neon-blue">Projects</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="text-white hover:text-gold-400 transition-colors font-display uppercase tracking-wider text-sm flex items-center gap-2">
              View All Projects <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-400 text-xs font-display uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-neon-blue/0 group-hover:border-neon-blue/50 rounded-xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;