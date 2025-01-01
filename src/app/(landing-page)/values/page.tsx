import React from 'react';
import { DollarSign, Award, ShieldCheck } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="bg-white py-16 min-h-[700px] flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Drip Republic?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Affordable */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#F8E8E8] flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-[#f74d25]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 opacity-[0.8]">Affordable</h3>
            <p className="text-gray-600 opacity-[0.8]">Premium fashion that doesn't break the bank. We believe great style should be accessible to everyone.</p>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#F8E8E8] flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-[#f74d25]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 opacity-[0.8]">Quality</h3>
            <p className="text-gray-600 opacity-[0.8]">Each piece is crafted with attention to detail and premium materials for long-lasting style and comfort.</p>
          </div>

          {/* Reliable */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#F8E8E8] flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#f74d25]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 opacity-[0.8]">Reliable</h3>
            <p className="text-gray-600 opacity-[0.8]">Count on us for consistent quality, timely delivery, and exceptional customer service every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;