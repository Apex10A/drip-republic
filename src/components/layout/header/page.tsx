"use client"
import React, {useState} from 'react'
import { ChevronRight, ShoppingCart, Star, Menu, X } from 'lucide-react';
import Image from 'next/image';
import "@/app/index.css"

const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
         <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
                <Image src='/LogoTwo.png' alt='' width={200} height={200}/>
              {/* <h1 className="text-2xl font-bold text-gray-900">DRIP_REPUBLIC</h1> */}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Shop</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Categories</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">About</a>
              <ShoppingCart className="h-6 w-6 text-gray-900 cursor-pointer" />
            </div>

            <div>
                <button className='bg-[#f74d25] text-white w-[140px] hidden  px-3 py-3 rounded-md hover:bg-[#ffe9d0] text-[16px] md:text-[18px] md:flex justify-center items-center'>Login</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-900">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-900">Shop</a>
              <a href="#" className="block px-3 py-2 text-gray-900">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-900">About</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default page