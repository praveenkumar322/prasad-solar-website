import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../data/business';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-800 mb-4">
            Serving Kakinada & Surrounding Areas
          </h2>
          <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
            Bringing solar energy to homes and businesses across East Godavari
          </p>
        </motion.div>

        {/* Area Tags */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {SERVICE_AREAS.areas.map((area) => (
            <motion.div
              key={area.name}
              variants={item}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all
                ${area.verified
                  ? 'bg-solar-blue text-white shadow-md'
                  : 'bg-warm-gray/80 text-warm-gray-800 border border-warm-gray-200'
                }`}
            >
              {area.verified ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <MapPin className="w-4 h-4" />
              )}
              {area.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-warm-gray-400 text-sm mb-8"
        >
          Service areas with <CheckCircle className="w-3.5 h-3.5 inline text-solar-blue" /> are verified. Others are indicative — contact us to confirm coverage.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#quote"
            className="inline-flex items-center gap-2 text-solar-amber hover:text-solar-amber-dark font-semibold transition-colors"
          >
            Not sure if we serve your area? Ask us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
