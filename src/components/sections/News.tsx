import Link from 'next/link';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "February 25, 2026",
      title: "New Ethiopian Blend Launch",
      excerpt: "Introducing our exclusive Ethiopian single-origin coffee with notes of blueberry and jasmine...",
    },
    {
      id: 2,
      date: "February 20, 2026",
      title: "Sustainable Packaging Initiative",
      excerpt: "Goldenstars commits to 100% biodegradable packaging by the end of 2026...",
    },
    {
      id: 3,
      date: "February 15, 2026",
      title: "Coffee Roasting Workshop",
      excerpt: "Join our expert roasters for a hands-on workshop on the art of coffee roasting...",
    }
  ];

  return (
    <section id="news" className="py-20 px-6 max-w-7xl mx-auto">
      
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-bold text-[#4A2E1B]">Latest News</h2>
        <p className="text-lg text-[#4A2E1B]/70">Stay updated with our coffee journey</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {newsItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl overflow-hidden border border-[#4A2E1B]/10 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="h-48 w-full bg-gradient-to-b from-[#4A2E1B] to-[#4A2E1B]/80"></div>
            
            <div className="p-8 flex flex-col flex-grow">
              {/* Updated Bright Yellow Date */}
              <span className="text-sm font-semibold text-[#FFCC00] mb-2">{item.date}</span>
              <h3 className="text-xl font-bold text-[#4A2E1B] mb-4">{item.title}</h3>
              <p className="text-[#4A2E1B]/70 mb-6 flex-grow leading-relaxed">
                {item.excerpt}
              </p>
              
              {/* Updated Hover Color */}
              <Link 
                href={`/news`} 
                className="inline-flex items-center gap-2 text-[#4A2E1B] font-bold hover:text-[#FFCC00] transition mt-auto"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        {/* Updated Bright Yellow Main Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 bg-[#FFCC00] text-[#2A1810] px-8 py-3 rounded font-bold hover:bg-[#E6B800] transition shadow-lg"
        >
          View All News
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
}