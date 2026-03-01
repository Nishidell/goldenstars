import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2A1810] text-[#FDF8EE]/70 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#D4AF37] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4.5 4.5a3 3 0 0 0-3 3v5.25c0 1.256.45 2.41 1.192 3.32.969 1.185 2.502 1.956 4.308 1.956h7.5c1.806 0 3.339-.771 4.308-1.956a4.809 4.809 0 0 0 1.192-3.32V7.5a3 3 0 0 0-3-3h-1.5v4.125c0 1.58-1.246 2.875-2.813 2.875H9.563C7.996 14.5 6.75 13.205 6.75 11.625V4.5h-2.25ZM21 7.5h-1.5v4.125c0 .647-.23 1.243-.615 1.706.494.137.998.24 1.514.31A2.25 2.25 0 0 0 22.5 11.41v-1.66A2.25 2.25 0 0 0 21 7.5Z" />
            </svg>
            <span className="text-xl font-bold text-white tracking-wide">Goldenstars</span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium coffee packaging solutions for coffee lovers worldwide.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
            <li><Link href="#products" className="hover:text-[#D4AF37] transition">Products</Link></li>
            <li><Link href="#services" className="hover:text-[#D4AF37] transition">Services</Link></li>
            <li><Link href="#news" className="hover:text-[#D4AF37] transition">News</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Custom Packaging</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Coffee Roasting</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Wholesale Distribution</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Coffee Consulting</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">✉</span> info@goldenstars.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">📞</span> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#D4AF37]">📍</span> 123 Coffee Lane, Seattle, WA
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Goldenstars. All rights reserved.</p>
      </div>
    </footer>
  );
}