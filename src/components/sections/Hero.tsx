import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative w-full h-[600px] flex items-center justify-start"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark brown gradient overlay */}
      <div className="absolute inset-0 bg-[#4A2E1B]/80 md:bg-gradient-to-r md:from-[#4A2E1B]/95 md:to-[#4A2E1B]/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Premium Coffee <br /> Roasting
          </h1>
          
          <p className="text-lg text-stone-200 font-medium mb-8">
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