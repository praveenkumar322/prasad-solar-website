import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, ShieldCheck, MapPin, Users } from 'lucide-react';
import { BUSINESS_PHONE } from '../data/business';

export default function Hero() {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900">
      {/* Background Gradient & Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-slate-900 z-0"></div>
      
      {/* Decorative Sun Rays */}
      <div className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] opacity-10 pointer-events-none z-0 overflow-hidden">
        <div className="w-full h-full animate-[spin_60s_linear_infinite] origin-center rounded-full" 
             style={{ background: 'conic-gradient(from 0deg, transparent 0deg 20deg, #f59e0b 20deg 40deg, transparent 40deg 60deg, #f59e0b 60deg 80deg, transparent 80deg 100deg, #f59e0b 100deg 120deg, transparent 120deg 140deg, #f59e0b 140deg 160deg, transparent 160deg 180deg, #f59e0b 180deg 200deg, transparent 200deg 220deg, #f59e0b 220deg 240deg, transparent 240deg 260deg, #f59e0b 260deg 280deg, transparent 280deg 300deg, #f59e0b 300deg 320deg, transparent 320deg 340deg, #f59e0b 340deg 360deg)' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-white/90">Serving Kakinada Since 2010 · 5.0 Rated</span>
          </motion.div>

          {/* Headlines */}
          <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Trusted Solar Solutions for Kakinada Homes &amp; Businesses
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed">
            From solar panels to complete rooftop installations — powering Kakinada with clean energy since 2010.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a 
              href="#quote" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-amber-500/20"
            >
              Get a Free Solar Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={`tel:${BUSINESS_PHONE}`} 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Talk to a Solar Expert
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-white/80 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              <span>5.0 Rated on Justdial</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Est. 2010</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>44+ Happy Customers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Kakinada, AP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
