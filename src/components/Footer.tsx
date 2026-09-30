import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS, BUSINESS_PHONE, BUSINESS_WHATSAPP, BUSINESS_EMAIL } from '../data/business';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1e293b] text-white border-t border-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Column 1: Business Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">{BUSINESS.name}</h3>
            <p className="text-slate-300 text-lg mb-6">Trusted solar solutions since {BUSINESS.established}</p>
            <div className="flex items-start gap-3 text-slate-300 mb-6">
              <MapPin className="w-6 h-6 shrink-0 mt-0.5 text-[#f59e0b]" />
              <p className="leading-relaxed">{BUSINESS.address}</p>
            </div>
            <p className="text-slate-300">
              <span className="font-semibold text-white block mb-1">Hours:</span>
              {BUSINESS.hours} | Mon – Sat
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4 text-slate-300">
              {['Home', 'Services', 'Why Us', 'Process', 'Reviews', 'FAQ', 'Get a Quote'].map((link) => {
                const href = link === 'Get a Quote' ? '#quote' : `#${link.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <li key={link}>
                    <a href={href} className="hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                      <span className="text-[#f59e0b]">&rsaquo;</span> {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Get in Touch</h3>
            <ul className="space-y-5 text-slate-300">
              <li>
                <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 hover:text-[#f59e0b] transition-colors group">
                  <div className="bg-slate-800 p-2 rounded-full group-hover:bg-[#f59e0b] transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{BUSINESS_PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${BUSINESS_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#10b981] transition-colors group">
                  <div className="bg-slate-800 p-2 rounded-full group-hover:bg-[#10b981] transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{BUSINESS_WHATSAPP}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-4 hover:text-[#f59e0b] transition-colors group">
                  <div className="bg-slate-800 p-2 rounded-full group-hover:bg-[#f59e0b] transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{BUSINESS_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f172a] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4 md:gap-0">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-xs tracking-wider">Website by E82 Studios</p>
        </div>
      </div>
    </footer>
  );
};
