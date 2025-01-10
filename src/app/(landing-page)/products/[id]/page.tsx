// app/products/[id]/page.tsx
"use client"

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {useCart} from '@/app/context/cartcontext'

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

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen p-6 md:max-w-[70%] mx-auto">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <Card className="grid md:grid-cols-2 gap-8 p-6">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <Button 
            variant="outline" 
            size="icon"
            className="absolute top-4 right-4 rounded-full"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <Badge variant="outline" className="mb-2">
                Size: {product.size}
              </Badge>
            </div>
            <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            <div className="text-3xl font-bold text-primary">
            ₦{product.price.toFixed(2)}
            </div>
          </CardHeader>

          <CardContent className="p-0 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="space-y-2 text-sm">
                <li>• Product ID: {product.id}</li>
                <li>• Material: Premium Cotton Blend</li>
                <li>• Care Instructions: Machine washable</li>
                <li>• Fit: Regular fit</li>
                <li>• Available in multiple sizes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Size & Fit</h3>
              <p className="text-sm">
                Model wears: Size {product.size}<br/>
                Model height: 6'1" / 185 cm
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Delivery & Returns</h3>
              <p className="text-sm">
                Free standard delivery on orders over $50<br/>
                Easy 30-day return policy
              </p>
            </div>
          </CardContent>

      
            <div className="w-full space-y-3">
            <Button className="w-full" size="lg" variant='outline' onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
              <Button variant="outline" className="w-full" size="lg">
                Find in Store
              </Button>
            </div>

        </div>
      </Card>
    </div>
  );
}