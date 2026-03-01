import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import Services from "../components/sections/Services";
import News from "../components/sections/News";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]"> 
      <Hero />
      <About />
      <Products />
      <Services />
      <News />
      <ContactCTA />
    </main>
  );
}