import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleScrollToSavings = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#savings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-amber-500 text-slate-900 py-2 relative z-[60]"
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-center relative">
          <a
            href="#savings"
            onClick={handleScrollToSavings}
            className="text-sm font-medium hover:underline text-center px-6"
          >
            ☀️ PM Surya Ghar Subsidy — Up to ₹78,000 off your solar installation! Learn more ↓
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
