import { Button } from "@/components/ui/button";

export function CategorySection() {
  const categories = [
    { name: "Proteins", count: "4 Products", color: "bg-blue-100" },
    { name: "Greens", count: "2 Products", color: "bg-green-100" },
    { name: "Pre-Workout", count: "3 Products", color: "bg-pink-100" },
    { name: "Vitamins", count: "6 Products", color: "bg-yellow-100" },
    { name: "Recovery", count: "3 Products", color: "bg-purple-100" },
    { name: "Accessories", count: "5 Products", color: "bg-orange-100" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-4xl font-heading font-bold mb-4">Shop by Category</h2>
             <p className="text-muted-foreground">Find the perfect supplement for your goals.</p>
           </div>
           <Button variant="link" className="text-primary font-bold">View All Collections</Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`min-w-[200px] h-[240px] rounded-3xl ${cat.color} p-6 flex flex-col justify-between cursor-pointer hover:-translate-y-2 transition-transform duration-300 snap-center`}
            >
              <div className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-xl font-bold">
                 {cat.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground/80">{cat.name}</h3>
                <p className="text-sm text-foreground/50 font-medium">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
