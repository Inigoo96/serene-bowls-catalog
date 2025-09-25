import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Bowl<span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="nav-link"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="nav-link"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="nav-link"
            >
              {t('nav.collections')}
            </button>
          </div>

          {/* Right side - Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </Button>
            <Button variant="default">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 nav-link"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 nav-link"
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block w-full text-left px-3 py-2 nav-link"
              >
                {t('nav.collections')}
              </button>
              <div className="flex items-center justify-between px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2"
                >
                  <Globe size={16} />
                  {language.toUpperCase()}
                </Button>
                <Button size="sm">
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};