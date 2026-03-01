import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          {/* Roasted Brown Heading */}
          <h2 className="text-4xl font-bold text-[#4A2E1B]">
            About Us
          </h2>
          
          <p className="text-lg text-[#4A2E1B]/80 leading-relaxed">
            Goldenstars is a premier coffee packaging company dedicated to preserving the rich flavors and aromas of the world's finest coffee beans.
          </p>
          
          <p className="text-lg text-[#4A2E1B]/80 leading-relaxed">
            With over 10 years of expertise in coffee roasting and packaging, we've built a reputation for quality, innovation, and sustainability in every product we create.
          </p>
          
          <div className="pt-2">
            {/* Gold Link */}
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-[#4A2E1B] transition"
            >
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Updated border color to match the brown */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#4A2E1B]/10">
          <img 
            src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop" 
            alt="Coffee farmer examining coffee cherries" 
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}