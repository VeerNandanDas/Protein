import lifestyleImg from "@assets/generated_images/wellness_yoga_lifestyle.png";
import ingredientImg from "@assets/generated_images/fresh_ingredients_close-up.png";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Composition */}
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={lifestyleImg} 
                alt="Lifestyle" 
                className="w-full h-80 object-cover rounded-3xl shadow-lg mt-12 rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
              />
              <img 
                src={ingredientImg} 
                alt="Ingredients" 
                className="w-full h-80 object-cover rounded-3xl shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              We believe in <span className="text-primary italic">radical transparency</span>.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The supplement industry is full of secrets. We're here to change that. Every scoop of Pure Scoop Nutrition is a promise kept—premium ingredients, zero hidden fillers, and results you can feel.
            </p>

            <ul className="space-y-4">
              {[
                "Sourced from regenerative organic farms",
                "Third-party tested for heavy metals",
                "Zero artificial sweeteners or gums",
                "Biodegradable packaging"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-4 rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/80">
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
