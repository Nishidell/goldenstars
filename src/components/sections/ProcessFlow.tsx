"use client";

import { useState } from 'react';

export default function ProcessFlow() {
  // Array of steps updated to include specific background images for each process
  const processSteps = [
    {
      id: 0,
      title: "Sourcing",
      description: "We work directly with sustainable farms in high-altitude regions to hand-select only the top 1% of Arabica beans. Ethical sourcing ensures fair pay for farmers and the highest quality raw ingredients for us.",
      image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1920&auto=format&fit=crop", // Coffee Farmer/Cherries
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      )
    },
    {
      id: 1,
      title: "R & D",
      description: "Our master roasters meticulously test sample batches to discover the perfect temperature curve and roast time. This research unlocks the unique tasting notes hidden within each specific bean origin.",
      image: "https://images.unsplash.com/photo-1495474472205-51e75a22047f?q=80&w=1920&auto=format&fit=crop", // Raw beans/Lab feel
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.575 3.939m-13.45-3.939 1.575 3.939m11.875-3.939A1.125 1.125 0 0 1 21 16.5v4.125m-13.45-5.139A1.125 1.125 0 0 0 3 16.5v4.125m15-5.139a48.498 48.498 0 0 0-12 0" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Roasting",
      description: "Using state-of-the-art equipment, beans are roasted in small, carefully monitored batches. This allows for precision heat control, ensuring an even roast that maximizes aroma, body, and flavor.",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1920&auto=format&fit=crop", // Roasting Machine
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Quality",
      description: "Every roasted batch goes through a rigorous 'cupping' process. Our certified Q-Graders taste and grade the coffee to guarantee it meets Goldenstars' uncompromising standards before it ever sees a bag.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop", // Coffee pouring/Tasting
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Packaging",
      description: "We immediately seal the freshly roasted beans in our proprietary, one-way valve bags. This flushes out oxygen and locks in the rich aromas and volatile flavor compounds, ensuring absolute peak freshness.",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1920&auto=format&fit=crop", // Coffee Bags
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Shipping",
      description: "Your coffee is dispatched within 24 hours of roasting. Our expedited logistics network guarantees that your beans arrive at your doorstep exactly when they are ready to be brewed.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1920&auto=format&fit=crop", // Coffee shop/boxes
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    // Outer section is now relative with hidden overflow to contain the background image
    <section className="relative py-24 w-full overflow-hidden">
      
      {/* DYNAMIC BACKGROUND IMAGE 
        We map through the images and change their opacity based on the active step.
        This creates a smooth cross-fade effect when clicking different tabs.
      */}
      {processSteps.map((step, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === activeStep ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${step.image}')` }}
        />
      ))}

      {/* Dark overlay so the white text and white card are easy to read */}
      <div className="absolute inset-0 bg-[#4A2E1B]/85 z-10"></div>

      {/* Content Container (z-20 puts it above the background and overlay) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        
        {/* Updated Section Header to be White & Yellow for dark background */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">The Goldenstars Process</h2>
          <p className="text-lg text-[#FFCC00] drop-shadow-md">From the farm to your cup, see how we guarantee perfection.</p>
        </div>

        {/* The White Card holding the tabs */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFCC00]/20">
          
          <div className="flex overflow-x-auto hide-scrollbar bg-[#FDF8EE] border-b border-[#4A2E1B]/10">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-1 min-w-[120px] flex flex-col items-center justify-center p-6 transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-[#4A2E1B] text-[#FFCC00]' 
                    : 'text-[#4A2E1B] hover:bg-stone-200' 
                }`}
              >
                <div className="mb-3">{step.icon}</div>
                <span className="text-sm font-bold tracking-wide uppercase">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[250px] flex flex-col justify-center items-center text-center bg-white">
            <h3 className="text-3xl font-bold text-[#4A2E1B] mb-6">
              {processSteps[activeStep].title}
            </h3>
            <p className="text-lg text-[#4A2E1B]/80 leading-relaxed max-w-3xl">
              {processSteps[activeStep].description}
            </p>
          </div>

        </div>
      </div>
      
    </section>
  );
}