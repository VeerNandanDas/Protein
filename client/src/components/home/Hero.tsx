import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/premium_vanilla_protein_tub_mockup.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 max-w-xl animate-in slide-in-from-bottom-10 fade-in duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">New Formulation 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] text-foreground text-balance">
            Purity is <span className="text-primary italic">Priority</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Experience the cleanest, science-backed nutrition for your wellness journey. No fillers, no artificial nonsense. Just pure, honest ingredients.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
              Shop Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/50 backdrop-blur-sm hover:bg-white transition-all hover:-translate-y-1 border-primary/20">
              View Ingredients
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 opacity-80">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <div className="flex text-yellow-500 mb-1">★★★★★</div>
              <span className="text-muted-foreground">5,000+ Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative w-full max-w-[600px] aspect-square">
            {/* Main Product */}
            <img 
              src={heroImage} 
              alt="Pure Scoop Vanilla Protein" 
              className="w-full h-full object-contain drop-shadow-2xl float-animation"
            />
            
            {/* Floating Elements/Badges */}
            <div className="absolute top-20 left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-in fade-in slide-in-from-left duration-700 delay-700">
               <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Protein Per Scoop</div>
               <div className="text-3xl font-heading font-bold text-foreground">25g</div>
            </div>

            <div className="absolute bottom-20 right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-in fade-in slide-in-from-right duration-700 delay-1000">
               <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Flavor Profile</div>
               <div className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                 🍦 Smooth Vanilla
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
