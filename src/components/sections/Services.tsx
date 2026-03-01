import Link from 'next/link';

export default function Services() {
  // Array of services with standard SVG icons matching your design
  const services = [
    {
      id: 1,
      title: "Custom Roasting",
      description: "Expert custom roasting services to elevate your coffee experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7.125a7.076 7.076 0 0 0-7.224 7.224l1.103 1.104A7.076 7.076 0 0 0 16.103 8.23l-1.103-1.105Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5A2.25 2.25 0 0 0 8.25 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25h-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75V4.5m0 0A2.25 2.25 0 0 1 17.25 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25m-3-15h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.5h-4.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Premium Packaging",
      description: "Expert premium packaging services to elevate your coffee experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Fast Shipping",
      description: "Expert fast shipping services to elevate your coffee experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Quality Guarantee",
      description: "Expert quality guarantee services to elevate your coffee experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-4xl font-bold text-[#4A2E1B]">Our Services</h2>
        <p className="text-lg text-[#4A2E1B]/70">Comprehensive solutions for your coffee business</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-xl p-8 text-center border border-[#D4AF37]/60 shadow-sm hover:shadow-md hover:border-[#D4AF37] transition duration-300 flex flex-col items-center"
          >
            {/* Icon Container */}
            <div className="text-[#4A2E1B] mb-6">
              {service.icon}
            </div>
            
            {/* Service Text */}
            <h3 className="text-xl font-bold text-[#4A2E1B] mb-3">{service.title}</h3>
            <p className="text-[#4A2E1B]/80 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* View All Services Link */}
      <div className="text-center">
        <Link 
          href="#all-services" 
          className="inline-flex items-center gap-2 text-[#4A2E1B] font-bold hover:text-[#D4AF37] transition"
        >
          View All Services
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
}