import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PetShop } from "@/components/PetShop";
import { VetServices } from "@/components/VetServices";
import { Vaccination } from "@/components/Vaccination";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PetShop />
      <VetServices />
      <Vaccination />
      
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 PetCare Pro. Your trusted partner in pet wellness.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
