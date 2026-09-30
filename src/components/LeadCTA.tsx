import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, BUSINESS_PHONE, BUSINESS_WHATSAPP, WHATSAPP_MESSAGE } from '../data/business';

export default function LeadCTA() {
  const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-16 md:py-24 bg-solar-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Switch to Solar?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a personalised solar quote for your home or business. It takes less than 2 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-amber hover:bg-solar-amber-dark text-warm-gray-800 font-bold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-amber-500/25 animate-pulse-glow"
            >
              Get My Free Solar Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${BUSINESS_PHONE}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-4 px-8 rounded-xl text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Trust reinforcement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-sm"
          >
            Trusted by {BUSINESS.reviewCount}+ customers · {BUSINESS.rating}★ rated on {BUSINESS.ratingSource} · Serving {BUSINESS.address.city} since {BUSINESS.established}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
