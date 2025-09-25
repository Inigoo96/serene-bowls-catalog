import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBowl from "@/assets/hero-bowl.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section-padding pt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="hero-text">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="text-lg px-8 py-6"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <div className="relative">
              <img 
                src={heroBowl}
                alt="Elegant ceramic bowl"
                className="w-full h-auto rounded-2xl shadow-large"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                {t('promo.text')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};