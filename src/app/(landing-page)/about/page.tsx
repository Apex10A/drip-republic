"use client"
import React from 'react';
import Image from 'next/image';
import "../../globals.css";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src=""
          alt="Fashion Collection"
          className="object-cover brightness-75"
          fill
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Drip Republic</h1>
        </div>
      </div>

      {/* About the Brand Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Brand</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Drip Republic is your go-to destination for curated thrifted fashion, uniting UK-grade quality with unbeatable prices. 
              We specialize in sourcing, curating and delivering top tier thrifted menswear while maintaining an unparalleled commitment 
              to transparency, reliability and professionalism.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/api/placeholder/600/400"
              alt="Brand Story"
              className="rounded-lg object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <div className="relative h-[300px] mb-6">
                <Image
                  src="/api/placeholder/600/300"
                  alt="Our Mission"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Drip Republic, we're on a mission to make top quality thrifted fashion affordable 
                for everyone. We want to redefine thrifted style, making it accessible and stylish 
                without breaking the bank.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <div className="relative h-[300px] mb-6">
                <Image
                  src="/api/placeholder/600/300"
                  alt="Our Vision"
                  className="rounded-lg object-cover"
                  fill
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are working towards a world where everyone can express their style affordably, 
                redefining fashion norms. We aim to be the go-to destination that sets new standards 
                for stylish, budget-friendly clothing, fostering a community where everyone can 
                showcase their unique fashion sense without limitations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality */}
          <div className="text-center">
            <div className="relative h-[200px] mb-4">
              <Image
                src="/api/placeholder/400/200"
                alt="Quality"
                className="rounded-lg object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">Carefully curated UK-grade thrifted fashion</p>
          </div>

          {/* Affordability */}
          <div className="text-center">
            <div className="relative h-[200px] mb-4">
              <Image
                src="/api/placeholder/400/200"
                alt="Affordability"
                className="rounded-lg object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Style</h3>
            <p className="text-gray-600">Premium fashion without the premium price tag</p>
          </div>

          {/* Sustainability */}
          <div className="text-center">
            <div className="relative h-[200px] mb-4">
              <Image
                src="/api/placeholder/400/200"
                alt="Sustainability"
                className="rounded-lg object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Fashion</h3>
            <p className="text-gray-600">Contributing to a more sustainable fashion future</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;