import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_REVIEWS, BUSINESS } from '../data/business';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalDots = Math.max(1, MOCK_REVIEWS.length - cardsToShow + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalDots - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="reviews" className="py-20 bg-solar-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Real feedback from real customers</p>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-5xl font-bold text-slate-900">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
            <p className="text-slate-600">Based on 44+ reviews on Justdial</p>
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {MOCK_REVIEWS.map((review, index) => (
                <div 
                  key={index} 
                  className="w-full min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3"
                >
                  <div className="bg-white rounded-xl p-6 h-full shadow-md border border-slate-100 flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 italic mb-6 flex-grow">
                      "{review.text}"
                    </blockquote>
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-3">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{review.author}</div>
                        <div className="text-xs text-slate-500">Verified Customer · Justdial</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex === totalDots - 1}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalDots)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === i ? 'bg-amber-500' : 'bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a href="#" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
            Read All Reviews →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
