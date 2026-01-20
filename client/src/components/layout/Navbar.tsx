import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location !== "/" ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tight text-primary-foreground flex items-center gap-2">
            <span className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full text-lg">P</span>
            <span className="text-foreground">PureScoop</span>
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={`text-sm uppercase tracking-wide font-medium transition-colors ${
                location === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/50">
            <Search className="w-5 h-5 text-foreground/70" />
          </Button>
          <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-secondary/50">
            <ShoppingBag className="w-5 h-5 text-foreground/70" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full ring-2 ring-white" />
          </Button>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <a className={`text-2xl font-heading font-bold ${
                        location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}>
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
