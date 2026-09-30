import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/business';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1e293b] sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[#64748b]">Everything you need to know about going solar</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white shadow-sm rounded-lg overflow-hidden border border-slate-100"
        >
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className={`border-b border-slate-200 ${index === FAQ_ITEMS.length - 1 ? 'border-b-0' : ''}`}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:bg-slate-50 transition-colors hover:bg-slate-50"
              >
                <span className="text-lg font-semibold text-[#1e293b] pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#64748b] shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#64748b]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="inline-flex items-center text-lg font-semibold text-[#1e3a5f] hover:text-[#f59e0b] transition-colors">
            Still have questions? Get in touch &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
