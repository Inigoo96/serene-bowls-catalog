import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Bowl<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.collections')}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>{t('footer.phone')}</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">{t('footer.social')}</h5>
              <div className="flex gap-3">
                <Instagram 
                  size={20} 
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" 
                />
                <Facebook 
                  size={20} 
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" 
                />
                <Twitter 
                  size={20} 
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};