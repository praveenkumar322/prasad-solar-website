import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV_LINKS, BUSINESS_PHONE, BUSINESS_WHATSAPP } from '../data/business';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2 z-50"
          >
            <Sun className={`w-8 h-8 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`} />
            <span className={`font-bold text-xl md:text-2xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Prasad Solar Services
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-medium hover:text-amber-500 transition-colors ${
                      isScrolled ? 'text-slate-600' : 'text-slate-200'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#quote"
              onClick={(e) => handleScrollTo(e, '#quote')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors"
            >
              Get Free Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 p-2 ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 pb-6"
          >
            <nav className="flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-2xl font-bold text-slate-800 hover:text-amber-500 block"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-8">
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-4 rounded-xl font-medium"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_PHONE}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="#quote"
                onClick={(e) => handleScrollTo(e, '#quote')}
                className="flex items-center justify-center gap-2 bg-amber-500 text-white py-4 rounded-xl font-medium shadow-md shadow-amber-500/20"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
