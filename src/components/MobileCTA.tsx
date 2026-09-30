import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_PHONE, BUSINESS_WHATSAPP, WHATSAPP_MESSAGE } from '../data/business';

export const MobileCTA: React.FC = () => {
  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.15)] z-40 md:hidden flex">
      <a 
        href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`}
        className="flex-1 bg-[#1e3a5f] text-white flex flex-col items-center justify-center gap-1 active:bg-[#0f172a] transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
      </a>
      
      <a 
        href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#10b981] text-white flex flex-col items-center justify-center gap-1 active:bg-[#059669] transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <a 
        href="#quote"
        onClick={scrollToQuote}
        className="flex-1 bg-[#f59e0b] text-white flex flex-col items-center justify-center gap-1 active:bg-[#d97706] transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Get Quote</span>
      </a>
    </div>
  );
};
