import Link from 'next/link';

export default function ProductsPage() {
  // Removed prices, focusing purely on the coffee's marketing details
  const allProducts = [
    {
      id: 1,
      title: "Premium Reserve Collection",
      origin: "Ethiopian Single Origin",
      roast: "Light Roast",
      tastingNotes: "Blueberry, Jasmine, Honey",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", 
    },
    {
      id: 2,
      title: "Golden Blend Series",
      origin: "House Blend (South America)",
      roast: "Medium Roast",
      tastingNotes: "Chocolate, Caramel, Roasted Almond",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Morning Starter Pack",
      origin: "Central America Blend",
      roast: "Medium-Dark Roast",
      tastingNotes: "Citrus, Toasted Hazelnut, Brown Sugar",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Midnight Espresso",
      origin: "Indonesian & Brazilian Blend",
      roast: "Dark Roast",
      tastingNotes: "Dark Cocoa, Molasses, Smoky Spice",
      image: "https://images.unsplash.com/photo-1559525839-a159a43f8a09?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Decaf Delight",
      origin: "Colombian (Swiss Water Process)",
      roast: "Medium Roast",
      tastingNotes: "Graham Cracker, Sweet Cherry, Milk Chocolate",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Volcanic Single Origin",
      origin: "Guatemalan Antigua",
      roast: "Medium-Light Roast",
      tastingNotes: "Green Apple, Cinnamon, Velvet Body",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8EE] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#4A2E1B] py-20 text-center px-6 border-t border-white/10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Roasts</h1>
        <p className="text-xl text-[#FFCC00] max-w-2xl mx-auto">
          Explore our carefully curated selection of premium coffee beans.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {allProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#4A2E1B]/10 flex flex-col group">
              
              {/* Product Image */}
              <div className="h-64 w-full relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute top-4 right-4 bg-[#FFCC00] text-[#4A2E1B] text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                  {product.roast}
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-[#4A2E1B]/60 uppercase tracking-wider mb-2">
                  {product.origin}
                </p>
                <h3 className="text-2xl font-bold text-[#4A2E1B] mb-4">
                  {product.title}
                </h3>
                
                <div className="mb-8 flex-grow">
                  <p className="text-[#4A2E1B]/80 text-sm font-medium">Tasting Notes:</p>
                  <p className="text-[#4A2E1B]/70 italic">{product.tastingNotes}</p>
                </div>
                
                {/* Marketing CTA Button instead of Cart */}
                <div className="mt-auto pt-6 border-t border-[#4A2E1B]/10">
                  <Link 
                    href="/#contact" 
                    className="w-full bg-[#FFCC00] text-[#2A1810] px-6 py-3 rounded font-bold hover:bg-[#E6B800] transition shadow-md flex items-center justify-center gap-2"
                  >
                    Inquire About This Roast
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
      
    </main>
  );
}