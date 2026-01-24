import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { BrandSection } from "@/components/home/BrandSection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProtein } from "@/components/home/FeaturedProtein";
import { FeaturedVitamins } from "@/components/home/FeaturedVitamins";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <BrandSection />
        <CategoryGrid />
        <FeaturedProtein />
        <ProductGrid />
        <FeaturedVitamins />
      </main>
      <Footer />
    </div>
  );
}
