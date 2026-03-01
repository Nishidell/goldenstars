import Link from 'next/link';

export default function Navbar() {

  return (
    <header className="bg-[#4A2E1B] text-white w-full shadow-md"> 
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          {/* Coffee cup accent in Premium Gold */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#D4AF37]">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v5.25c0 1.256.45 2.41 1.192 3.32.969 1.185 2.502 1.956 4.308 1.956h7.5c1.806 0 3.339-.771 4.308-1.956a4.809 4.809 0 0 0 1.192-3.32V7.5a3 3 0 0 0-3-3h-1.5v4.125c0 1.58-1.246 2.875-2.813 2.875H9.563C7.996 14.5 6.75 13.205 6.75 11.625V4.5h-2.25ZM21 7.5h-1.5v4.125c0 .647-.23 1.243-.615 1.706.494.137.998.24 1.514.31A2.25 2.25 0 0 0 22.5 11.41v-1.66A2.25 2.25 0 0 0 21 7.5Z" />
          </svg>
          <span className="text-xl font-bold tracking-wide">Goldenstars</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="text-[#D4AF37] hover:text-white transition">Home</Link>
          <Link href="#about" className="hover:text-[#D4AF37] transition">About Us</Link>
          <Link href="#products" className="hover:text-[#D4AF37] transition">Products</Link>
          <Link href="#services" className="hover:text-[#D4AF37] transition">Services</Link>
          <Link href="#news" className="hover:text-[#D4AF37] transition">News</Link>
          <Link href="#contact" className="hover:text-[#D4AF37] transition">Contact</Link>
        </div>

      </nav>
    </header>
  );
}