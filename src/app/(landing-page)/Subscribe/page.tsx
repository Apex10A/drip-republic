import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Page = () => {
  return (
    <div 
      className="relative min-h-[700px] bg-cover bg-center py-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/img_4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white flex flex-col px-4 md:translate-x-[200px] lg:translate-x-[200px] translate-x-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">Subscribe to Our Newsletter</h1>
        <p className="text-base md:text-lg mb-6 text-center md:text-left">Stay updated with our latest news and updates</p>
        <div className="max-w-xl flex flex-col md:flex-row items-center gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 md:px-6 py-3 md:py-4 rounded-[30px] text-black outline-none"
          />
          <button className="w-full md:w-auto bg-[#f74d25] px-6 md:px-8 py-3 md:py-4 rounded-[30px] uppercase text-zinc-300 font-semibold hover:bg-blue-700">
            Subscribe
          </button>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl mt-8 md:mt-10 font-bold">Follow us on</h1>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="p-2 md:p-3 border border-white rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={20} className="md:w-6 md:h-6" />
            </a>
            <a href="#" className="p-2 md:p-3 border border-white rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;