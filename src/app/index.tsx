"use client"
import React, { useState, useEffect } from 'react';
import "./index.css"
import { Star, Inbox } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import Image from 'next/image';
import { getFirestore } from "firebase/firestore";
import { Loader } from 'lucide-react';
import { getDatabase, ref, onValue, push, set } from "firebase/database";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSystem = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    id: '',
    name: '',
    rating: 1,
    comment: '',
    date: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = () => {
      const db = getDatabase();
      const reviewsRef = ref(db, "reviews");

      onValue(reviewsRef, (snapshot) => {
        const reviewsData = snapshot.val();
        const reviews = reviewsData
          ? Object.keys(reviewsData).map((key) => ({
              id: key,
              date: new Date(reviewsData[key].date).toLocaleString(),
              ...reviewsData[key],
            }))
          : [];
        setReviews(reviews);
      });
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const db = getDatabase();
      const newReviewRef = push(ref(db, "reviews"));
      await set(newReviewRef, {
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toLocaleString(),
      });

      setReviews([{ id: newReviewRef.key!, name: newReview.name, rating: newReview.rating, comment: newReview.comment, date: new Date().toLocaleString() }, ...reviews]);
      setNewReview({ id: '', name: "", rating: 5, comment: "", date: "" });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    } catch (error) {
      console.error("Error adding review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mx-auto px-4 py-10 space-y-8 bg-[#fff]'>
      <div className="max-w-7xl mx-auto p-4 space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#231f20]">Customer Reviews</h1>
          <p className="text-gray-600">Share your experience with Drip Republic</p>
        </div>

        {/* Form and Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Review Form */}
          <Card className="lg:h-[600px] order-2 lg:order-1">
            <CardHeader>
              <CardTitle><h1 className="text-xl md:text-2xl">Write a Review</h1></CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1"><p className='text-[16px] md:text-[18px]'>Your Name</p></label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md field"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"><p className='text-[16px] md:text-[18px] pb-2'>Rating</p></label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1"><p className='text-[16px] md:text-[18px] pt-2'>Your Review</p></label>
                  <textarea
                    required
                    className="w-full p-2 border rounded-md h-24 field"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your experience with our products..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#f74d25] text-white px-5 py-3 rounded-md hover:bg-[#ffe9d0] text-[16px] md:text-[18px] flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin h-5 w-5 mr-3" />
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Image Container with Zoom Effect */}
          <div className="relative w-full lg:w-[800px] h-[300px] xs:h-[400px] lg:h-[600px] overflow-hidden rounded-lg cursor-pointer lg:order-2">
            <div className="absolute inset-0 transition-transform duration-500 hover:scale-110">
              <Image
                src='/package.png'
                alt='Package illustration'
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Thank You Alert */}
        {showThankYou && (
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription>
              <p>Thank you for your review! Your feedback helps us improve.</p>
            </AlertDescription>
          </Alert>
        )}

        {/* Display Reviews */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold mb-4 text-[#231f20]">Recent Reviews</h1>
          {reviews.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {reviews.map((review) => (
              <div className='' key={review.id}>
                <Card className="mb-4 flex min-h-36">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className='flex items-end justify-end'>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
           ) : (
            <div className="flex flex-col items-center justify-center text-gray-500 py-10">
              <Inbox className="w-16 h-16 mb-4" />
              <p className=''>Your reviews are empty</p>
            </div>
          )}
        </div>

        {/* Coming Soon Section */}
        <Card className="bg-gray-50">
          <CardContent className="text-center py-8">
            <h2 className="text-lg md:text-xl font-semibold mb-2">More Features Coming Soon!</h2>
            <p className="text-gray-600">
              Our product catalog and online shopping features are currently under development.
              Check back soon for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewSystem;