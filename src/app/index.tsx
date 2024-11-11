// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);
  
//   const images = [
//     '/Image.jpg',  // Replace with your actual image paths
//     '/Image2.jpg',
//     '/Image3.jpg'
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   // Manual navigation
//   const goToSlide = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center mx-auto p-4 min-h-screen bg-[#feece8]">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[600px] items-center max-w-7xl">
//         {/* Image Slider */}
//         <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
//           {/* Images */}
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute w-full h-full transition-opacity duration-500 ${
//                 currentImage === index ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <Image
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//             </div>
//           ))}
          
//           {/* Slider Navigation Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentImage === index 
//                     ? 'bg-white scale-110' 
//                     : 'bg-white/50 hover:bg-white/75'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="flex flex-col justify-center space-y-6 p-8">
//           <h1 className="text-5xl font-bold leading-tight">
//             Experience World
//             <span className="block mt-2">IN NEW LOOK</span>
//           </h1>
          
//           <p className="text-gray-600 text-lg max-w-md">
//             Discover our latest collection that redefines style and comfort. Step into the future of fashion.
//           </p>
          
//           <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold w-fit
//             transition-transform hover:scale-105 active:scale-95">
//             Explore Collection
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;