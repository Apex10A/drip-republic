import React from 'react';

const Page = () => {
  return (
    <div 
      className="relative min-h-[700px] bg-cover bg-center py-20 flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/img_4.jpg')" }}
    >
      <div className="" />
      <div className="relative z-10 text-white flex flex-col items-center translate-x-[200px]">
        <h1 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <p className="text-lg mb-6">Stay updated with our latest news and updates</p>
        <div className="max-w-md flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-6 py-4 mb-4 rounded-[30px] text-black"
          />
          <button className=" px-6 py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;