// app/products/[id]/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import {useCart} from '@/app/context/cartcontext'
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  price: number;
  image: string;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const id = params.id as string;

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
      } else {
        setProduct(null);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

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