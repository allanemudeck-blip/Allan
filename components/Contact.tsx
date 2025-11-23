import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-400 font-display tracking-[0.2em] uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Let's Create <br />
              <span className="text-neon-blue text-glow">Something Epic</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-body">
              Ready to elevate your brand? Contact us today for a consultation or quote. We are ready to bring your vision to reality.
            </p>

            <div className="space-y-8">
              <a href="https://wa.me/256766466847" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors border border-white/10 group-hover:border-neon-blue/50">
                  <Phone className="text-white group-hover:text-neon-blue w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-white font-display text-xl">+256 766 466 847</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors border border-white/10 group-hover:border-gold-500/50">
                  <MapPin className="text-white group-hover:text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-display text-xl">Kampala City, Uganda</p>
                </div>
              </div>

              <a href="mailto:allanemudeck@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors border border-white/10 group-hover:border-purple-500/50">
                  <Mail className="text-white group-hover:text-purple-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-display text-xl">allanemudeck@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-display uppercase tracking-wider text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-display uppercase tracking-wider text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-display uppercase tracking-wider text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-blue-600 text-black font-bold font-display uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all rounded-lg flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;