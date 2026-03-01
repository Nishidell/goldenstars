export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-8">
      {/* Hero Container */}
      <div className="max-w-3xl text-center space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-5xl font-extrabold text-stone-900 tracking-tight">
          Keep Your Coffee Fresh with <span className="text-amber-700">Goldenstars</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-xl text-stone-600">
          Premium, sustainable packaging solutions designed to protect the flavor and aroma of your roasted beans.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition">
            View Our Products
          </button>
          <button className="bg-white text-stone-800 px-8 py-3 rounded-full font-semibold border border-stone-300 hover:bg-stone-50 transition">
            Contact Us
          </button>
        </div>
        
      </div>
    </main>
  );
}