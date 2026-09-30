import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Building2, Hammer, Wrench, HelpCircle, 
  Building, Factory, Tractor, MoreHorizontal,
  Phone, MessageCircle, ThumbsUp, ArrowLeft, CheckCircle
} from 'lucide-react';
import { 
  REQUIREMENT_OPTIONS, PROPERTY_OPTIONS, BILL_OPTIONS, CONTACT_OPTIONS, 
  BUSINESS_PHONE, BUSINESS_WHATSAPP, WHATSAPP_MESSAGE 
} from '../data/business';

const IconMap: Record<string, React.ElementType> = {
  Home, Building2, Hammer, Wrench, HelpCircle,
  Building, Factory, Tractor, MoreHorizontal,
  Phone, MessageCircle, ThumbsUp
};

const STEPS = [
  { id: 1, title: 'What do you need?' },
  { id: 2, title: 'Property type' },
  { id: 3, title: 'Monthly electricity bill' },
  { id: 4, title: 'Your location' },
  { id: 5, title: 'Contact details' },
  { id: 6, title: 'Preferred contact method' }
];

export const QuoteForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    requirement: '',
    propertyType: '',
    billAmount: '',
    location: '',
    name: '',
    phone: '',
    isWhatsApp: false,
    email: '',
    contactMethod: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (isNextDisabled()) return;

    if (currentStep === STEPS.length) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleUpdateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isNextDisabled = () => {
    if (currentStep === 1 && !formData.requirement) return true;
    if (currentStep === 2 && !formData.propertyType) return true;
    if (currentStep === 3 && !formData.billAmount) return true;
    if (currentStep === 4 && !formData.location.trim()) return true;
    if (currentStep === 5 && (!formData.name.trim() || formData.phone.replace(/\D/g, '').length !== 10)) return true;
    if (currentStep === 6 && !formData.contactMethod) return true;
    return false;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REQUIREMENT_OPTIONS.map((opt) => {
              const Icon = IconMap[opt.icon];
              return (
                <div 
                  key={opt.value}
                  onClick={() => handleUpdateField('requirement', opt.value)}
                  className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${formData.requirement === opt.value ? 'border-[#f59e0b] bg-amber-50' : 'border-slate-200 hover:border-[#f59e0b] hover:bg-slate-50'}`}
                >
                  <div className="flex items-start gap-4">
                    {Icon && <Icon className={`w-6 h-6 shrink-0 ${formData.requirement === opt.value ? 'text-[#f59e0b]' : 'text-[#64748b]'}`} />}
                    <div>
                      <h3 className="font-semibold text-[#1e293b]">{opt.label}</h3>
                      {opt.description && <p className="text-sm text-[#64748b] mt-1">{opt.description}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROPERTY_OPTIONS.map((opt) => {
              const Icon = IconMap[opt.icon];
              return (
                <div 
                  key={opt.value}
                  onClick={() => handleUpdateField('propertyType', opt.value)}
                  className={`p-5 border-2 rounded-xl cursor-pointer transition-all flex items-center gap-3 ${formData.propertyType === opt.value ? 'border-[#f59e0b] bg-amber-50' : 'border-slate-200 hover:border-[#f59e0b] hover:bg-slate-50'}`}
                >
                  {Icon && <Icon className={`w-5 h-5 shrink-0 ${formData.propertyType === opt.value ? 'text-[#f59e0b]' : 'text-[#64748b]'}`} />}
                  <span className="font-medium text-[#1e293b]">{opt.label}</span>
                </div>
              );
            })}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-3">
            {BILL_OPTIONS.map((opt) => (
              <div 
                key={opt.value}
                onClick={() => handleUpdateField('billAmount', opt.value)}
                className={`p-5 border-2 rounded-xl cursor-pointer transition-all text-center ${formData.billAmount === opt.value ? 'border-[#f59e0b] bg-amber-50 font-semibold text-[#f59e0b]' : 'border-slate-200 hover:border-slate-300 font-medium text-[#1e293b]'}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block text-sm font-medium text-[#1e293b] mb-2">Enter your area in Kakinada</label>
            <input 
              type="text" 
              value={formData.location}
              onChange={(e) => handleUpdateField('location', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f59e0b] focus:border-[#f59e0b] outline-none transition-all"
              placeholder="e.g., Siddhartha Nagar, Rayudupalem"
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1">Full Name *</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => handleUpdateField('name', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f59e0b] focus:border-[#f59e0b] outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1">Phone Number *</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-[#64748b]">
                  +91
                </span>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleUpdateField('phone', e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-r-xl focus:ring-2 focus:ring-[#f59e0b] focus:border-[#f59e0b] outline-none transition-all"
                  placeholder="9876543210"
                  maxLength={10}
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="isWhatsApp"
                type="checkbox"
                checked={formData.isWhatsApp}
                onChange={(e) => handleUpdateField('isWhatsApp', e.target.checked)}
                className="h-5 w-5 text-[#10b981] focus:ring-[#10b981] border-gray-300 rounded"
              />
              <label htmlFor="isWhatsApp" className="ml-3 block text-sm text-[#1e293b]">
                This is also my WhatsApp number
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1e293b] mb-1">Email (Optional)</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => handleUpdateField('email', e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#f59e0b] focus:border-[#f59e0b] outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
        );
      case 6:
        return (
          <div className="grid grid-cols-1 gap-4">
            {CONTACT_OPTIONS.map((opt) => {
              const Icon = IconMap[opt.icon];
              return (
                <div 
                  key={opt.value}
                  onClick={() => handleUpdateField('contactMethod', opt.value)}
                  className={`p-5 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${formData.contactMethod === opt.value ? 'border-[#f59e0b] bg-amber-50' : 'border-slate-200 hover:border-[#f59e0b] hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className={`w-5 h-5 ${formData.contactMethod === opt.value ? 'text-[#f59e0b]' : 'text-[#64748b]'}`} />}
                    <span className="font-medium text-[#1e293b]">{opt.label}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.contactMethod === opt.value ? 'border-[#f59e0b] bg-white' : 'border-slate-300 bg-white'}`}>
                    {formData.contactMethod === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>}
                  </div>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[#1e293b]">Get Your Free Solar Quote</h2>
          <p className="mt-3 text-lg text-[#64748b]">It takes less than 2 minutes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8"
        >
          {!isSubmitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-[#64748b]">Step {currentStep} of {STEPS.length}</span>
                  <span className="text-sm font-medium text-[#1e3a5f]">{STEPS[currentStep - 1].title}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-[#f59e0b] h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content */}
              <div className="min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-[#1e293b] mb-6">{STEPS[currentStep - 1].title}</h3>
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Controls */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button 
                    onClick={handleBack}
                    className="flex items-center text-[#64748b] hover:text-[#1e293b] font-medium transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-50"
                  >
                    <ArrowLeft className="w-5 h-5 mr-1" /> Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                  className={`px-8 py-3 rounded-xl font-semibold text-white transition-all ${isNextDisabled() ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#f59e0b] hover:bg-[#d97706] shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
                >
                  {currentStep === STEPS.length ? 'Get My Solar Quote' : 'Continue'}
                </button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 mb-6">
                <CheckCircle className="w-12 h-12 text-[#10b981]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-3">Thank You!</h3>
              <p className="text-[#64748b] text-lg mb-1">Your solar quote request has been received.</p>
              <p className="text-[#64748b] text-lg mb-10">We will contact you within 24 hours.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#1e3a5f] text-white rounded-xl font-semibold hover:bg-[#0f172a] transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
                <a 
                  href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#10b981] text-white rounded-xl font-semibold hover:bg-[#059669] transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
