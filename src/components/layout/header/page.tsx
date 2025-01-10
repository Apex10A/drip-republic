"use client"
import React, {useState} from 'react'
import { ChevronRight, ShoppingCart, Star, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Add this import
import "@/app/index.css"
import { useCart } from '@/app/context/cartcontext';
import { Badge } from "@/components/ui/badge";

const page = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();
  return (
    <div>
         <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image src='/LogoTwo.png' alt='' width={200} height={200}/>
                </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600">Home</Link>
              <Link href="/shop" className="text-gray-900 hover:text-gray-600">Shop</Link>
              <Link href="/categories" className="text-gray-900 hover:text-gray-600">Categories</Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600">About us</Link>
              <Link href="/cart" className="relative">
          <ShoppingCart className="h-6 w-6 text-gray-900 cursor-pointer" />
          {cartCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-2 text-xs"
            >
              {cartCount}
            </Badge>
          )}
        </Link>
            </div>

            <div>
                <Link href="/login">
                  <button className='bg-[#f74d25] text-white w-[140px] hidden  px-3 py-3 rounded-md hover:bg-[#ffe9d0] text-[16px] md:text-[18px] md:flex justify-center items-center'>
                    Login
                  </button>
                </Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-900">Home</Link>
              <Link href="/shop" className="block px-3 py-2 text-gray-900">Shop</Link>
              <Link href="/categories" className="block px-3 py-2 text-gray-900">Categories</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-900">About</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default page