"use client";
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-black mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Drip Republic</h2>
            <p className="text-sm text-gray-500">
              Elevating your style with premium fashion and accessories. Join the revolution of contemporary fashion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-[#f74d25] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#f74d25] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#f74d25] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['New Arrivals', 'Best Sellers', 'Sale', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-800 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                'FAQ', 
                'Shipping & Returns', 
                'Size Guide', 
                'Track Order', 
                'Privacy Policy'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-800 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f74d25] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-800">
                  123 Fashion Street
                  <br />
                  Style District, ST 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#f74d25]" />
                <p className="text-sm text-gray-800">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#f74d25]" />
                <p className="text-sm text-gray-800">info@driprepublic.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-400 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with our latest trends and fashion tips
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-700 focus:outline-none focus:border-[#f74d25] text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#f74d25] text-white rounded-md hover:bg-[#e63d15] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Drip Republic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;