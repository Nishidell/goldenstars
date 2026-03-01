import Link from 'next/link';

export default function ServicesPage() {
  // Detailed array of services for the dedicated page
  const services = [
    {
      id: 1,
      title: "Custom Coffee Roasting",
      description: "Partner with our master roasters to develop a signature flavor profile exclusive to your brand. We roast in small, carefully monitored batches using state-of-the-art equipment to ensure absolute consistency and perfection in every cup.",
      features: [
        "Tailored Roast Profiles",
        "Small-Batch Precision",
        "Organic & Fair Trade Sourcing",
        "Guided Cupping Sessions"
      ],
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1000&auto=format&fit=crop", 
    },
    {
      id: 2,
      title: "Premium White-Label Packaging",
      description: "Your coffee deserves packaging as exceptional as the beans inside. We offer fully customizable, white-label packaging solutions featuring our proprietary one-way degassing valves to guarantee maximum freshness and shelf-life.",
      features: [
        "Custom Bag Design & Printing",
        "One-Way Degassing Valves",
        "Eco-Friendly & Biodegradable Options",
        "Nitrogen Flushing Available"
      ],
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Wholesale & Distribution",
      description: "Whether you run an independent café, a busy restaurant, or a corporate office, we provide reliable, high-volume wholesale coffee supply. Our expedited logistics network ensures you never run out of your most important ingredient.",
      features: [
        "High-Volume Supply Chain",
        "Expedited 24-Hour Dispatch",
        "Dedicated Account Managers",
        "Flexible Delivery Schedules"
      ],
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Coffee Consulting & Training",
      description: "Set your team up for success. Goldenstars offers comprehensive consulting services, from building out your café's coffee menu and workflow to hands-on barista training to ensure your staff brews the perfect cup every time.",
      features: [
        "Professional Barista Training",
        "Menu Development",
        "Equipment Sourcing & Calibration",
        "Workflow Optimization"
      ],
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDF8EE] pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#4A2E1B] py-20 text-center px-6 border-t border-white/10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-xl text-[#FFCC00] max-w-2xl mx-auto">
          Comprehensive, end-to-end solutions for your coffee business.
        </p>
      </div>

      {/* Services List (Alternating Layout) */}
      <div className="max-w-7xl mx-auto px-6 mt-24 space-y-32">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            // This is the magic Tailwind trick that alternates the layout based on odd/even index!
            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFCC00]/20 group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Text Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-[#4A2E1B]">{service.title}</h2>
              <p className="text-lg text-[#4A2E1B]/80 leading-relaxed">
                {service.description}
              </p>
              
              {/* Feature Checkmarks */}
              <ul className="space-y-3 pt-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#4A2E1B] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FFCC00]">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-2 bg-[#FFCC00] text-[#2A1810] px-8 py-3 rounded font-bold hover:bg-[#E6B800] transition shadow-lg"
                >
                  Discuss Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
}