import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Collections } from "@/components/Collections";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Products />
        <Collections />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
