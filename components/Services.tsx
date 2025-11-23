import React from 'react';
import { motion } from 'framer-motion';
import { Video, MonitorPlay, Briefcase, Users, Camera, FileText, CreditCard } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Advert Videos',
    description: 'High-quality promotional videos that bring your brand to life with motion and sound.',
    icon: Video,
  },
  {
    id: '2',
    title: 'Banners & Flyers',
    description: 'Premium designs that capture attention instantly on social media and print.',
    icon: MonitorPlay,
  },
  {
    id: '3',
    title: 'Business Presentations',
    description: 'Clean, professional presentations for high-stakes meetings and proposals.',
    icon: Briefcase,
  },
  {
    id: '4',
    title: 'Company Profiles',
    description: 'Modern company profiles designed to impress partners and clients.',
    icon: Users,
  },
  {
    id: '5',
    title: 'Professional Photo Editing',
    description: 'Studio-level retouching and editing for individuals and businesses.',
    icon: Camera,
  },
  {
    id: '6',
    title: 'Business Proposals',
    description: 'Well-structured, modern proposals that help you win more clients.',
    icon: FileText,
  },
  {
    id: '7',
    title: 'Business Cards',
    description: 'Elegant and professional business card designs that leave a lasting impression.',
    icon: CreditCard,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-950">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-400 font-display tracking-[0.2em] uppercase text-sm mb-2 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Creative <span className="text-neon-blue text-glow">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-1"
            >
              {/* Neon Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/50 to-gold-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-colors duration-300">
                <div className="absolute -right-8 -top-8 bg-neon-blue/10 w-32 h-32 rounded-full blur-2xl group-hover:bg-neon-blue/20 transition-all"></div>
                
                <service.icon className="w-12 h-12 text-gold-400 mb-6 relative z-10 group-hover:text-neon-blue transition-colors duration-300" />
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-glow transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-body leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;