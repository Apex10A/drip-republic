"use client"
import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import {useCart} from "@/app/context/cartcontext"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase"; // adjust path if needed

const ProductPage = () => {
  const { addToCart } = useCart();
  const [showAddAnimation, setShowAddAnimation] = useState<number | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSizeFilter, setActiveSizeFilter] = useState(null);
  
  const mainCategories = ["All", "Shirts", "Suit Pants"];
  const shirtSizes = ["All Sizes", "Small", "Medium", "Large", "X-Large"];
  
  const handleMainFilter = (filter: React.SetStateAction<string>) => {
    setActiveFilter(filter);
    setActiveSizeFilter(null); // Reset size filter when changing main category
  };

  // const handleSizeFilter = (size: string | React.SetStateAction<null>) => {
  //   setActiveSizeFilter(size === "All Sizes" ? null : size);
  // };

  const handleAddToCart = (product: any, event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
    setShowAddAnimation(product.id);
    setTimeout(() => setShowAddAnimation(null), 1000);
  };

  useEffect(() => {
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArr = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArr);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    if (activeFilter === "All") return true;
    if (activeFilter !== "Shirts") return product.category === activeFilter;
    
    // For Shirts category with size filtering
    if (!activeSizeFilter) return product.category === "Shirts";
    return product.category === "Shirts" && product.category === activeSizeFilter;
  });

 const handleProductClick = (productId: string) => {
      router.push(`/products/${productId}`);
    };

  if (loading) return <div>Loading...</div>;

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
          {/* <h3 className="font-thin text-md text-gray-800">{product.name}</h3> */}
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