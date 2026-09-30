import { motion } from 'framer-motion';
import { Clock, Award, Heart, Shield, Star, Zap } from 'lucide-react';

const reasons = [
  { icon: Clock, title: 'Timely Delivery', description: 'Projects completed on schedule, every time' },
  { icon: Award, title: 'Professional Team', description: 'Experienced and skilled installation experts' },
  { icon: Heart, title: 'Friendly & Helpful', description: 'A team that genuinely cares about your needs' },
  { icon: Shield, title: 'Stress-Free Experience', description: 'We handle everything from paperwork to installation' },
  { icon: Star, title: 'Quality Products', description: 'Only trusted, high-performance solar components' },
  { icon: Zap, title: 'Speedy Service', description: 'Quick response and efficient project completion' }
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Customers Choose Us
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Based on real customer feedback
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
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={idx} 
                variants={item}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#10b981] bg-opacity-10 text-[#10b981] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
