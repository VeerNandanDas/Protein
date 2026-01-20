import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategorySection />
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
