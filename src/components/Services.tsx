import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sun, Package, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/business';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Sun,
  Package,
  Wrench
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Comprehensive solar services for every need
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service: any, idx: number) => {
            const Icon = iconMap[service.icon] || Sun;
            return (
              <motion.div 
                key={idx} 
                variants={item}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-50 text-[#1e3a5f] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features?.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#quote" 
                  className="inline-flex items-center text-[#1e3a5f] font-semibold hover:text-amber-500 transition-colors mt-auto group"
                >
                  Enquire Now 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
