"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  // Array of image URLs for the slider
  const images = [
    "/Image.jpg",
    "/Image2.jpg", 
    "/Image3.jpg"
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slider effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Image Slider Container */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Elevate Your Style
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Discover our premium collection of men's fashion. From casual wear to formal attire,
            we've got you covered with the latest trends and timeless classics.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              Shop Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;