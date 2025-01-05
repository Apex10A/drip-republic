"use client";
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Streetwear',
    description: 'Urban fashion that combines comfort with style',
    image: '/img_1.jpg',
    itemCount: 42,
  },
  {
    id: 2,
    name: 'Formal Wear',
    description: 'Sophisticated attire for special occasions',
    image: '/img_3.jpg',
    itemCount: 35,
  },
  {
    id: 3,
    name: 'Accessories',
    description: 'Complete your look with premium accessories',
    image: '/img_1.jpg',
    itemCount: 28,
  },
  {
    id: 4,
    name: 'Footwear',
    description: 'Step out in style with our curated collection',
    image: '/img_1.jpg',
    itemCount: 56,
  },
  {
    id: 5,
    name: 'Outerwear',
    description: 'Stay warm without compromising on style',
    image: '/img_1.jpg',
    itemCount: 31,
  },
  {
    id: 6,
    name: 'New Arrivals',
    description: 'Fresh drops and latest additions to our collection',
    image: '/img_1.jpg',
    itemCount: 24,
  }
];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in">
              Shop by Category
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our carefully curated collections designed to elevate your style
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  {category.itemCount} items
                </p>
              </div>

              <a href={`/category/${category.id}`} className="absolute inset-0">
                <span className="sr-only">View {category.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collection Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-lg bg-[#f74d25]">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative px-6 py-16 sm:px-12 sm:py-20">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Featured Collection
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Discover our latest drops and exclusive pieces curated just for you.
              </p>
              <a
                href="/featured"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#f74d25] bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CategoriesPage;