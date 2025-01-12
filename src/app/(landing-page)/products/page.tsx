"use client"
import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {useCart} from "@/app/context/cartcontext"

const products = [
  // Shirts with scattered sizes
  {
    id: 1,
    name: "Classic White Shirt",
    price: 5000,
    size: "M",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
    category: "Shirts"
  },
  {
    id: 2,
    name: "Slim Fit Navy Shirt",
    price: 5000,
    size: "L",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Oxford Blue Shirt",
    price: 5000,
    size: "S",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632230/hbvtd2r9otmwcqzwnkq9.png",
    category: "Shirts"
  },
  {
    id: 4,
    name: "Business White Shirt",
    price: 5000,
    size: "XL",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/casdwu3yisz9sxhwuxdf.png",
    category: "Shirts"
  },
  {
    id: 5,
    name: "Striped Business Shirt",
    price: 5000,
    size: "M",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/rohzaki7r40kvwfwvhow.png",
    category: "Shirts"
  },
  {
    id: 6,
    name: "Casual Blue Shirt",
    price: 5000,
    size: "S",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/uzjlfi61wgv5igm0xkrq.png",
    category: "Shirts"
  },
  {
    id: 7,
    name: "Formal White Shirt",
    price: 5000,
    size: "L",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
    category: "Shirts"
  },
  {
    id: 8,
    name: "Pinstripe Shirt",
    price: 5000,
    size: "M",
    image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
    category: "Shirts"
  },
  // {
  //   id: 9,
  //   name: "Classic White Shirt",
  //   price: 29.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 10,
  //   name: "Slim Fit Navy Shirt",
  //   price: 32.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 11,
  //   name: "Oxford Blue Shirt",
  //   price: 34.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632230/hbvtd2r9otmwcqzwnkq9.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 12,
  //   name: "Business White Shirt",
  //   price: 36.99,
  //   size: "XL",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/casdwu3yisz9sxhwuxdf.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 13,
  //   name: "Striped Business Shirt",
  //   price: 39.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/rohzaki7r40kvwfwvhow.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 14,
  //   name: "Casual Blue Shirt",
  //   price: 28.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/uzjlfi61wgv5igm0xkrq.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 15,
  //   name: "Formal White Shirt",
  //   price: 42.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 16,
  //   name: "Pinstripe Shirt",
  //   price: 45.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 17,
  //   name: "Classic White Shirt",
  //   price: 29.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 18,
  //   name: "Slim Fit Navy Shirt",
  //   price: 32.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 19,
  //   name: "Oxford Blue Shirt",
  //   price: 34.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632230/hbvtd2r9otmwcqzwnkq9.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 20,
  //   name: "Business White Shirt",
  //   price: 36.99,
  //   size: "XL",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/casdwu3yisz9sxhwuxdf.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 21,
  //   name: "Striped Business Shirt",
  //   price: 39.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/rohzaki7r40kvwfwvhow.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 22,
  //   name: "Casual Blue Shirt",
  //   price: 28.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/uzjlfi61wgv5igm0xkrq.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 23,
  //   name: "Formal White Shirt",
  //   price: 42.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 24,
  //   name: "Pinstripe Shirt",
  //   price: 45.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 25,
  //   name: "Classic White Shirt",
  //   price: 29.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 26,
  //   name: "Slim Fit Navy Shirt",
  //   price: 32.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 27,
  //   name: "Oxford Blue Shirt",
  //   price: 34.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632230/hbvtd2r9otmwcqzwnkq9.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 28,
  //   name: "Business White Shirt",
  //   price: 36.99,
  //   size: "XL",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/casdwu3yisz9sxhwuxdf.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 29,
  //   name: "Striped Business Shirt",
  //   price: 39.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/rohzaki7r40kvwfwvhow.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 30,
  //   name: "Casual Blue Shirt",
  //   price: 28.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/uzjlfi61wgv5igm0xkrq.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 31,
  //   name: "Formal White Shirt",
  //   price: 42.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 32,
  //   name: "Pinstripe Shirt",
  //   price: 45.99,
  //   size: "M",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632231/bhcbfjrhjva6md2idftz.png",
  //   category: "Shirts"
  // },
  // {
  //   id: 33,
  //   name: "Formal White Shirt",
  //   price: 42.99,
  //   size: "L",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632233/x5jds14prne6mdgibjx6.png",
  //   category: "Shirts"
  // },
  // // Continue with remaining 26 shirts...
  // {
  //   id: 34,
  //   name: "Modern Fit Shirt",
  //   price: 38.99,
  //   size: "S",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/uzjlfi61wgv5igm0xkrq.png",
  //   category: "Shirts"
  // },

  // // Suit Pants
  // {
  //   id: 35,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 36,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 37,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 38,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 39,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 40,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 41,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 42,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 43,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 44,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 45,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 46,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 47,
  //   name: "Classic Black Suit Pants",
  //   price: 79.99,
  //   size: "32x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734653925/g9xm4q3srlnzf1jb25zy.jpg",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 48,
  //   name: "Navy Slim Fit Suit Pants",
  //   price: 84.99,
  //   size: "30x32",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // },
  // {
  //   id: 49,
  //   name: "Charcoal Grey Suit Pants",
  //   price: 89.99,
  //   size: "34x34",
  //   image: "https://res.cloudinary.com/dsymioclv/image/upload/v1734632229/m3kauk0zgpmvvydoomzn.png",
  //   category: "Suit Pants"
  // }
];

const ProductPage = () => {
  const { addToCart } = useCart();
  const [showAddAnimation, setShowAddAnimation] = useState<number | null>(null);
  const handleAddToCart = (product: any, event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
    setShowAddAnimation(product.id);
    setTimeout(() => setShowAddAnimation(null), 1000);
  };
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSizeFilter, setActiveSizeFilter] = useState(null);
  
  const mainCategories = ["All", "Shirts", "SweatShirts", "Wristwatch", "Sneakers", "Suit Pants"];
  const shirtSizes = ["All Sizes", "Small", "Medium", "Large", "X-Large"];
  
  const handleMainFilter = (filter: React.SetStateAction<string>) => {
    setActiveFilter(filter);
    setActiveSizeFilter(null); // Reset size filter when changing main category
  };

  // const handleSizeFilter = (size: string | React.SetStateAction<null>) => {
  //   setActiveSizeFilter(size === "All Sizes" ? null : size);
  // };

  const filteredProducts = products.filter(product => {
    if (activeFilter === "All") return true;
    if (activeFilter !== "Shirts") return product.category === activeFilter;
    
    // For Shirts category with size filtering
    if (!activeSizeFilter) return product.category === "Shirts";
    return product.category === "Shirts" && product.category === activeSizeFilter;
  });

 const handleProductClick = (productId: number) => {
      router.push(`/products/${productId}`);
    };
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-[#fff] text-center">
      <div>
        <p className="font-bold text-3xl text-[#3F3F3F]">Check out what's new</p>
        <p className="text-xl text-[#3F3F3F]">Latest of the trends we have to offer</p>
      </div>
      
      {/* Main category filters */}
      <div className="flex items-center justify-center gap-3 pt-5 flex-wrap">
        {mainCategories.map((filter) => (
          <button
            key={filter}
            onClick={() => handleMainFilter(filter)}
            className={`border border-zinc-200 px-5 py-2 rounded-3xl transition-all duration-300 hover:scale-105
              ${activeFilter === filter 
                ? 'bg-[#F74D25] text-white' 
                : 'text-[#B1B1B1] hover:bg-gray-50'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Size filters - only show when Shirts category is selected */}
      {activeFilter === "Shirts" && (
          <div
          className="flex items-center justify-center gap-3 mt-3 mb-5 flex-wrap"
        >
          {shirtSizes.map((size) => (
            <button
              key={size}
              // onClick={() => handleSizeFilter(size)}
              className={`border border-zinc-200 px-4 py-1.5 rounded-2xl transition-all duration-300 hover:scale-105 text-sm
                ${(size === "All Sizes" && !activeSizeFilter) || activeSizeFilter === size
                  ? 'bg-[#F74D25] text-white' 
                  : 'text-[#B1B1B1] hover:bg-gray-50'}`}
            >
              {size}
            </button>
          ))}
       </div>
      )}

<div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-4 py-10 w-full max-w-[1300px]"
      >
        {filteredProducts.map((product) => (
            <div className='max-w-xl w-full'
          >
            <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="group relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="aspect-[3/4] w-[320px] max-h-[300px] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start pt-5 w-full">
          <h3 className="font-thin text-md text-gray-800">{product.name}</h3>
          <p className="text-sm font-thin uppercase opacity-[0.8] text-gray-800">CLOTHING, {product.category}</p>

          <div className='flex w-full items-center'>
          <hr className='w-full bg-[#3F3F3F] '/>
          <div className='bg-[#EAEAEA] rounded-full px-3 py-3 ml-5 relative'>
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={(e) => handleAddToCart(product, e)}
    >
      <ShoppingCart className="w-5 h-5 text-[#A9A9A9] cursor-pointer" />
    </motion.div>
    <AnimatePresence>
      {showAddAnimation === product.id && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 text-xs"
        >
          ✓
        </motion.div>
      )}
    </AnimatePresence>
  </div>
          </div>

          <p className="font-bold text-gray-800">₦{product.price}</p>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;