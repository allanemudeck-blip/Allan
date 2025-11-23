import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Kyomuhendo',
    role: 'CEO',
    company: 'TechStart Uganda',
    content: 'Allanz Digital transformed our brand identity completely. Their futuristic approach and attention to detail is unmatched in Kampala.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'James Okello',
    role: 'Marketing Director',
    company: 'FutureEvents',
    content: 'Professional, timely, and incredibly creative. The promotional videos they produced helped us sell out our event in record time.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'David Mwesigwa',
    role: 'Founder',
    company: 'Urban Eats',
    content: 'The best graphic design team I have worked with. Their company profile designs helped us secure major partnerships.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-blue font-display tracking-[0.2em] uppercase text-sm mb-2 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Trusted by <span className="text-gold-400 text-glow-gold">Brands</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-300 group relative"
            >
              <div className="absolute -top-4 -right-4 bg-slate-900 rounded-full p-3 border border-white/10 group-hover:border-gold-400 transition-colors shadow-lg">
                <Quote className="w-6 h-6 text-gold-400 fill-gold-400" />
              </div>
              
              <p className="text-gray-300 font-body leading-relaxed italic mb-8">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neon-blue/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold font-display">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {testimonial.role}, <span className="text-neon-blue">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;