import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/home/ProductGrid";

export default function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32">
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}
