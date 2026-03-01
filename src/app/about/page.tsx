export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#4A2E1B] py-20 text-center px-6 border-t border-white/10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
        <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto">
          Passionate about every single bean, from the farm to your cup.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-24">
        
        {/* Mission Section (Image & Text) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#4A2E1B] mb-6">A Legacy of Quality</h2>
            <p className="text-lg text-[#4A2E1B]/80 leading-relaxed mb-6">
              Founded with a deep love for coffee, Goldenstars started as a small local roastery and has grown into a premier provider of world-class coffee and sustainable packaging solutions.
            </p>
            <p className="text-lg text-[#4A2E1B]/80 leading-relaxed">
              We believe that every cup tells a story. From the high-altitude farms where our beans are ethically sourced, to our state-of-the-art roasting facility, we meticulously monitor every step of the journey to ensure perfection.
            </p>
          </div>
          
          {/* Roasting Image */}
          <div className="h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/20 relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472205-51e75a22047f?q=80&w=1000&auto=format&fit=crop" 
              alt="Coffee beans roasting" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-white p-12 md:p-16 rounded-3xl shadow-lg border border-[#4A2E1B]/10">
          <h2 className="text-4xl font-bold text-center text-[#4A2E1B] mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <div className="text-[#D4AF37] mb-6 bg-[#FDF8EE] p-4 rounded-full">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2E1B] mb-3">Sustainability</h3>
              <p className="text-[#4A2E1B]/70 leading-relaxed">Committed to eco-friendly packaging and ethically sourcing our beans from responsible farmers.</p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center">
               <div className="text-[#D4AF37] mb-6 bg-[#FDF8EE] p-4 rounded-full">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2E1B] mb-3">Master Roasting</h3>
              <p className="text-[#4A2E1B]/70 leading-relaxed">Decades of combined experience dedicated to unlocking the perfect flavor profile in every batch.</p>
            </div>
            
            {/* Value 3 */}
             <div className="flex flex-col items-center">
               <div className="text-[#D4AF37] mb-6 bg-[#FDF8EE] p-4 rounded-full">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2E1B] mb-3">Community</h3>
              <p className="text-[#4A2E1B]/70 leading-relaxed">Building lasting relationships and supporting local farmers and coffee lovers worldwide.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}