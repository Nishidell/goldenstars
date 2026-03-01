import Link from 'next/link';

export default function Products() {
  // Here is our array of products. It makes it so easy to update text later!
  const products = [
    {
      id: 1,
      title: "Premium Reserve Collection",
      subtitle: "Ethiopian Single Origin",
      // High-quality placeholder image of coffee bags/beans
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", 
    },
    {
      id: 2,
      title: "Golden Blend Series",
      subtitle: "House Blend",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Morning Starter Pack",
      subtitle: "Medium Roast",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    // We use the Deep Brown background here to match the design's color block
    <section id="products" className="py-20 px-6 w-full bg-[#4A2E1B]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Coffee Products</h2>
          <p className="text-lg text-[#FDF8EE]/80">Premium coffee packaged with care and expertise</p>
        </div>

        {/* Product Grid: 1 column on mobile, 3 columns on large screens */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-[#FDF8EE] rounded-2xl overflow-hidden shadow-xl flex flex-col transform hover:-translate-y-2 transition duration-300">
              
              {/* Product Image */}
              <div className="h-56 w-full relative">
                <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
              </div>
              
              {/* Product Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#4A2E1B] mb-1">{product.title}</h3>
                <p className="text-sm text-[#4A2E1B]/70 mb-8 flex-grow">{product.subtitle}</p>
                
                {/* Full-width Gold Button inside the card */}
                <button className="w-full py-3 bg-[#D4AF37] text-[#2A1810] font-bold rounded flex items-center justify-center gap-2 hover:bg-[#c5a028] transition">
                  {/* Coffee Cup Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M4.5 4.5a3 3 0 0 0-3 3v5.25c0 1.256.45 2.41 1.192 3.32.969 1.185 2.502 1.956 4.308 1.956h7.5c1.806 0 3.339-.771 4.308-1.956a4.809 4.809 0 0 0 1.192-3.32V7.5a3 3 0 0 0-3-3h-1.5v4.125c0 1.58-1.246 2.875-2.813 2.875H9.563C7.996 14.5 6.75 13.205 6.75 11.625V4.5h-2.25ZM21 7.5h-1.5v4.125c0 .647-.23 1.243-.615 1.706.494.137.998.24 1.514.31A2.25 2.25 0 0 0 22.5 11.41v-1.66A2.25 2.25 0 0 0 21 7.5Z" />
                  </svg>
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="#all-products" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#2A1810] px-8 py-3 rounded font-bold hover:bg-[#c5a028] transition shadow-lg">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}