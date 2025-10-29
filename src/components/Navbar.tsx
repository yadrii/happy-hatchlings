import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Stethoscope, Syringe, User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] rounded-lg transition-transform group-hover:scale-110">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
            PetCare Pro
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#shop" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <ShoppingBag className="h-4 w-4" />
            Pet Shop
          </a>
          <a href="#services" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Stethoscope className="h-4 w-4" />
            Vet Services
          </a>
          <a href="#vaccination" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            <Syringe className="h-4 w-4" />
            Vaccination
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
          <Link to="/vet-auth">
            <Button variant="hero" size="sm">
              Vet Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
