import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import greenTub from "@assets/generated_images/green_superfood_tub_mockup.png";
import pinkPouch from "@assets/generated_images/pink_berry_protein_pouch.png";
import whiteTub from "@assets/generated_images/premium_vanilla_protein_tub_mockup.png";

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Pure Whey Isolate",
      flavor: "Vanilla Bean",
      price: "$49.99",
      image: whiteTub,
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Organic Supergreens",
      flavor: "Mint & Lime",
      price: "$39.99",
      image: greenTub,
      tag: "New Arrival"
    },
    {
      id: 3,
      name: "Berry Recovery",
      flavor: "Wild Strawberry",
      price: "$44.99",
      image: pinkPouch,
      tag: "Limited Edition"
    },
    {
      id: 4,
      name: "Plant Protein",
      flavor: "Chocolate Fudge",
      price: "$54.99",
      image: whiteTub, 
      tag: null
    }
  ];

  return (
    <section className="py-20 bg-secondary/20" id="shop">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Trending Favorites</h2>
          <p className="text-muted-foreground text-lg">
            Our most loved formulas, crafted for peak performance and daily wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                  {product.tag}
                </div>
              )}

              {/* Image Area */}
              <div className="relative aspect-square mb-6 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-3/4 h-3/4 object-contain z-10 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-md"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-medium">{product.flavor}</div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-bold text-foreground">{product.price}</span>
                  <Button size="icon" className="rounded-full bg-black text-white hover:bg-primary transition-colors h-10 w-10">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-10 h-14 border-2 text-base font-bold hover:bg-black hover:text-white transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
