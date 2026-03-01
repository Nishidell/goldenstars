"use client"; 

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const heroImages = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1447933601400-b8a90050eb01?q=80&w=1920&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=1920&auto=format&fit=crop"  
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-start overflow-hidden">
      
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-[#4A2E1B]/60 md:bg-gradient-to-r md:from-[#4A2E1B]/80 md:to-[#4A2E1B]/20 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Premium Coffee <br /> Roasting
          </h1>
          
          <p className="text-xl text-stone-200 font-medium mb-10 drop-shadow-md">
            From bean to cup, excellence in every batch
          </p>
          
          {/* THE NEW BRIGHT YELLOW BUTTON */}
          <Link 
            href="#products" 
            className="inline-flex items-center gap-2 bg-[#FFCC00] text-[#2A1810] px-8 py-4 rounded font-bold hover:bg-[#E6B800] transition-all duration-300 shadow-lg"
          >
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

        </div>
      </div>
    </section>
  );
}