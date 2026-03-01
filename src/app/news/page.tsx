"use client";
import Link from 'next/link';

export default function NewsPage() {
  // A featured article to highlight at the top
  const featuredPost = {
    id: 0,
    date: "March 1, 2026",
    category: "Sustainability",
    title: "The Future of Coffee: Moving to 100% Biodegradable Packaging",
    excerpt: "At Goldenstars, we believe that great coffee shouldn't cost the earth. Read about our massive new initiative to transition our entire product line to fully compostable and biodegradable packaging by the end of the year, reducing our carbon footprint and helping our farming partners.",
    image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1920&auto=format&fit=crop", 
  };

  // The regular grid of older articles
  const newsItems = [
    {
      id: 1,
      date: "February 25, 2026",
      category: "Product Launch",
      title: "New Ethiopian Reserve Blend Launch",
      excerpt: "Introducing our exclusive Ethiopian single-origin coffee. Discover the vibrant notes of wild blueberry and jasmine in our lightest, most floral roast yet.",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", 
    },
    {
      id: 2,
      date: "February 15, 2026",
      category: "Education",
      title: "Mastering the Art of the Perfect Espresso",
      excerpt: "Struggling to get that perfect crema at home? Our head roaster breaks down the science of extraction, grind size, and tamping for the ultimate espresso shot.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      date: "February 5, 2026",
      category: "Events",
      title: "Goldenstars at the Global Coffee Expo",
      excerpt: "Join us next month in Seattle as we showcase our new proprietary roasting technology and offer exclusive cupping sessions to attendees.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8EE] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#4A2E1B] py-20 text-center px-6 border-t border-white/10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Latest News</h1>
        <p className="text-xl text-[#FFCC00] max-w-2xl mx-auto">
          Insights, updates, and stories from the Goldenstars team.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">
        
        {/* Featured Post (Hero Layout) */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#4A2E1B]/10 flex flex-col lg:flex-row group">
          <div className="w-full lg:w-3/5 h-[400px] lg:h-auto relative overflow-hidden">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
            />
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#FFCC00] text-[#4A2E1B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {featuredPost.category}
              </span>
              <span className="text-[#4A2E1B]/60 text-sm font-semibold">{featuredPost.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A2E1B] mb-6 leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-[#4A2E1B]/80 text-lg mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div>
              <Link 
                href={`#read-${featuredPost.id}`} 
                className="inline-flex items-center gap-2 text-[#4A2E1B] font-bold text-lg hover:text-[#FFCC00] transition border-b-2 border-[#FFCC00] pb-1"
              >
                Read Full Article
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#4A2E1B]/10 flex flex-col group">
              <div className="h-56 w-full relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[#FFCC00] text-[#4A2E1B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-[#4A2E1B]/60 mb-3">{item.date}</span>
                <h3 className="text-2xl font-bold text-[#4A2E1B] mb-4">{item.title}</h3>
                <p className="text-[#4A2E1B]/70 mb-8 flex-grow leading-relaxed">
                  {item.excerpt}
                </p>
                <Link 
                  href={`#read-${item.id}`} 
                  className="inline-flex items-center gap-2 text-[#4A2E1B] font-bold hover:text-[#FFCC00] transition mt-auto"
                >
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}