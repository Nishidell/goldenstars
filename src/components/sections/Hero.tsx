"use client"; // Required for state and effects

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  // 1. Array of high-quality images for the carousel
  const heroImages = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop", // Coffee Beans (Original)
    "https://images.unsplash.com/photo-1447933601400-b8a90050eb01?q=80&w=1920&auto=format&fit=crop", // Coffee Farm/Leaf
    "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=1920&auto=format&fit=crop"  // Pouring Coffee
  ];

  // 2. State to track which image is currently active
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Effect to automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image, or loop back to the first one
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup routine to stop the timer when the component isn't being used
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-start overflow-hidden">
      
      {/* 4. Background Image Carousel Layer */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          // We map over all images and control their opacity based on the current index.
          // 'transition-opacity duration-1000' creates the smooth fade effect.
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* 5. Updated Overlay with Lower Opacity */}
      {/* I've lowered the opacity values here so the images shine through more. */}
      {/* Mobile: 80% -> 60%. Desktop gradient: 95%/40% -> 80%/20%. */}
      <div className="absolute inset-0 bg-[#4A2E1B]/60 md:bg-gradient-to-r md:from-[#4A2E1B]/80 md:to-[#4A2E1B]/20 z-10"></div>

      {/* Content Container (Added z-20 to sit on top of everything) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          {/* Added drop-shadow to text for better readability against lighter images */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Premium Coffee <br /> Roasting
          </h1>
          
          <p className="text-lg text-stone-200 font-medium mb-8 drop-shadow-md">
            From bean to cup, excellence in every batch
          </p>
          
          {/* Gold CTA Button */}
          <Link 
            href="#products" 
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#2A1810] px-6 py-3 rounded font-bold hover:bg-[#c5a028] transition duration-300 shadow-lg"
          >
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}