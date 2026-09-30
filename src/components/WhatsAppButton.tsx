import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP, WHATSAPP_MESSAGE } from '../data/business';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-14 h-14 bg-[#10b981] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 relative z-10" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border-2 border-[#10b981] animate-ping opacity-75"></span>
    </a>
  );
};
