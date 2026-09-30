import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Users, MapPin } from 'lucide-react';

const stats = [
  { icon: Calendar, title: '16+ Years', subtitle: 'Serving Since 2010' },
  { icon: Star, title: '5.0 ★ Rating', subtitle: 'On Justdial' },
  { icon: Users, title: '44+ Reviews', subtitle: 'Happy Customers' },
  { icon: MapPin, title: 'Kakinada, AP', subtitle: 'Local Experts' }
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function TrustIndicators() {
  return (
    <section id="trust" className="bg-white py-12 border-b border-slate-100 shadow-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div key={idx} variants={item} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{stat.title}</h3>
                <p className="text-slate-500">{stat.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
