import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-slate-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-neon-blue font-display tracking-[0.2em] uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Innovating the <span className="text-gold-400">Digital Future</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-body">
                Allanz Digital is a creative media and digital solutions agency dedicated to elevating brands through professional visual communication. We create impactful digital content that helps businesses communicate effectively, attract customers, and build strong brand identity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-lg border-l-4 border-neon-blue">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-neon-blue w-6 h-6" />
                  <h3 className="font-display text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  To empower brands with innovative, high-quality digital and visual solutions that inspire engagement and drive measurable growth.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-lg border-l-4 border-gold-500">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="text-gold-500 w-6 h-6" />
                  <h3 className="font-display text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  To become one of Uganda’s top creative and digital service companies known for quality, innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" 
                alt="Digital Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-2xl font-bold text-white">Allanz Digital</p>
                <p className="text-gold-400 text-sm tracking-widest uppercase">Kampala HQ</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-neon-blue/30 rounded-full animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;