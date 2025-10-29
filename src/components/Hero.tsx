import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(183 70% 42% / 0.95) 0%, hsl(183 70% 60% / 0.9) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary-foreground animate-pulse" fill="currentColor" />
            <span className="text-sm font-medium text-primary-foreground">Trusted by 50,000+ Pet Parents</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Complete Pet Care
            <span className="block text-accent">At Your Fingertips</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            From premium pet products to expert veterinary care and vaccination tracking - everything your furry friend needs in one place.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#shop">
              <Button variant="secondary" size="lg" className="gap-2 text-base">
                Explore Shop
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/auth">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-base bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Vet Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
