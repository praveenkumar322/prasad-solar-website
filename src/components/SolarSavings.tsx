import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SolarSavings() {
  return (
    <section id="savings" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">How Much Can You Save with Solar?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Government subsidies make solar more affordable than ever
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              PM Surya Ghar: Muft Bijli Yojana
            </h3>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Up to 2 kW</span>
                    <span className="text-slate-600">₹30,000/kW subsidy</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">2–3 kW</span>
                    <span className="text-slate-600">₹18,000/kW subsidy</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Max subsidy</span>
                    <span className="text-slate-600">₹78,000 maximum amount</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
              <p className="text-emerald-800 font-medium">
                Up to 300 units of free electricity per month for participating households.
              </p>
            </div>

            <p className="text-sm text-slate-600 mb-2 font-medium">
              * Note: SC/ST households in AP may be eligible for up to 100% subsidy under specific schemes.
            </p>
            <p className="text-xs text-slate-500">
              Source: pmsuryaghar.gov.in
            </p>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative">
              <h4 className="text-center font-bold text-slate-800 mb-8 text-xl">Monthly Electricity Bill</h4>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                {/* Before */}
                <div className="bg-white p-6 rounded-xl border-2 border-red-100 shadow-sm w-full sm:w-2/5 text-center">
                  <div className="text-slate-500 font-medium mb-2">Before Solar</div>
                  <div className="text-2xl font-bold text-red-500">₹5,000</div>
                  <div className="text-sm text-slate-500">/ month</div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:block text-slate-300">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <div className="sm:hidden text-slate-300 transform rotate-90 my-2">
                  <ArrowRight className="w-8 h-8" />
                </div>

                {/* After */}
                <div className="bg-white p-6 rounded-xl border-2 border-emerald-100 shadow-sm w-full sm:w-2/5 text-center">
                  <div className="text-slate-500 font-medium mb-2">After Solar</div>
                  <div className="text-2xl font-bold text-emerald-500">₹500</div>
                  <div className="text-sm text-slate-500">/ month</div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-center text-white shadow-lg transform -translate-y-2">
                <div className="font-bold text-lg">Save ≈ ₹4,500/month</div>
                <div className="text-emerald-100 text-sm">That's ₹54,000 every year!</div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400 italic">
                  Illustrative example. Actual savings vary based on consumption and location.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Calculate Your Savings — Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
