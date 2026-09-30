import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, FileText, Hammer, CheckCircle, Zap } from 'lucide-react';
import { INSTALLATION_STEPS } from '../data/business';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};

const InstallationProcess: React.FC = () => {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="process" className="py-20 bg-solar-gradient text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Solar Installation Works</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">From consultation to clean energy in 6 simple steps</p>
        </motion.div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-[31px] md:hidden top-0 bottom-0 w-1 bg-amber-500/30"></div>
          <div className="hidden md:block absolute top-[31px] left-0 right-0 h-1 bg-amber-500/30"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row gap-8 md:gap-4 relative z-10"
          >
            {INSTALLATION_STEPS.map((step, index) => (
              <motion.div key={index} variants={item} className="flex md:flex-col items-start md:items-center relative w-full md:flex-1">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xl z-10 mb-0 md:mb-6 shadow-lg shadow-amber-500/20 mr-6 md:mr-0 relative">
                  {iconMap[step.icon]}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-amber-500">
                    {index + 1}
                  </div>
                </div>
                <div className="pt-2 md:pt-0 md:text-center flex-1">
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Solar Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallationProcess;
