"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

const HeroSlider = () => {
  // Array of slide data objects
  const slides = [
    {
      image: '/img_1.jpg',
      title: 'Elevate Your Style',
      description: 'Discover our premium collection of men\'s fashion. From casual wear to formal attire, we\'ve got you covered with the latest trends and timeless classics.',
      buttonText: 'Shop Now',
      buttonLink: '#'
    },
    {
      image: '/Slide_1.jpg',
      title: 'Effortless Elegance',
      description: 'Explore our latest collection, featuring the perfect blend of sophistication and comfort. Upgrade your wardrobe with our timeless pieces.',
      buttonText: 'Explore Now',
      buttonLink: '#'
    },
    {
      image: '/Slide_2.jpg',
      title: 'Trending Styles',
      description: 'Stay ahead of the curve with our curated selection of the season\'s hottest fashion. Find your new go-to looks and make a statement.',
      buttonText: 'Check It Out',
      buttonLink: '#'
    }
  ];

  // State to track current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Ref for scroll animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Auto-slider effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  // Animate on view effect
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative h-[90vh] w-full">
      {/* Image Slider Container */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={mainControls}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            {slides[currentSlideIndex].title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 opacity-[0.7] leading-6 ">
            {slides[currentSlideIndex].description}
          </p>
          <div className="mt-10">
            <a
              href={slides[currentSlideIndex].buttonLink}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f74d25] hover:bg-gray-50"
            >
              {slides[currentSlideIndex].buttonText}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;