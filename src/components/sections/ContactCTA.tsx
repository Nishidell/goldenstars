import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-6 w-full bg-[#4A2E1B] text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h2>
        
        <p className="text-lg text-[#FDF8EE]/80 leading-relaxed">
          Have questions about our coffee or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="pt-4">
          {/* Updated Bright Yellow Contact Button */}
          <Link 
            href="#contact-form" 
            className="inline-flex items-center gap-2 bg-[#FFCC00] text-[#2A1810] px-8 py-4 rounded font-bold hover:bg-[#E6B800] transition shadow-lg text-lg"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}