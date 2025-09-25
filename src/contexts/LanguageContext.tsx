import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.products': 'Productos', 
    'nav.collections': 'Colecciones',
    'nav.cta': 'Comprar ahora',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    'hero.cta': 'Explorar Colección',
    
    // Products
    'products.title': 'Nuestros Productos',
    'products.subtitle': 'Descubre nuestra selección cuidadosamente curada',
    'products.blue.name': 'Bowl Azul Océano',
    'products.cream.name': 'Bowl Crema Elegante',
    'products.terracotta.name': 'Bowl Terracota Cálido',
    'products.blue.desc': 'Un elegante bowl en tonos azul profundo, perfecto para cualquier ocasión especial.',
    'products.cream.desc': 'Diseño minimalista en crema suave, ideal para un estilo de vida moderno.',
    'products.terracotta.desc': 'Tonos tierra cálidos que aportan calidez y carácter a tu mesa.',
    'products.cta': 'Ver detalles',
    'products.badges.foodGrade': 'Food grade',
    'products.badges.microwaveSafe': 'Microwave safe',
    'products.badges.ovenSafe': 'Oven safe',
    
    // Collections
    'collections.title': 'Colecciones',
    'collections.subtitle': 'Bowls organizados por estilo y ocasión',
    'collections.minimalist.title': 'Minimalistas',
    'collections.minimalist.desc': 'Diseños limpios y elegantes para espacios modernos',
    'collections.colorful.title': 'Coloridos',
    'collections.colorful.desc': 'Vibrantes y expresivos, perfectos para dar vida a tu cocina',
    'collections.classic.title': 'Clásicos',
    'collections.classic.desc': 'Estilos atemporales que nunca pasan de moda',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.email': 'hola@bowlcollection.com',
    'footer.phone': '+34 123 456 789',
    'footer.social': 'Síguenos',
    'footer.rights': '© 2024 Bowl Collection. Todos los derechos reservados.',
    
    // Misc
    'promo.text': 'Oferta especial fin de semana: 15% dto',
    'price.from': 'Desde',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collections': 'Collections', 
    'nav.cta': 'Get in touch',
    
    // Hero
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explore our collection of bowls that combines style and practicality, perfect for any table.',
    'hero.cta': 'Explore Collection',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Discover our carefully curated selection',
    'products.blue.name': 'Ocean Blue Bowl',
    'products.cream.name': 'Elegant Cream Bowl', 
    'products.terracotta.name': 'Warm Terracotta Bowl',
    'products.blue.desc': 'An elegant bowl in deep blue tones, perfect for any special occasion.',
    'products.cream.desc': 'Minimalist design in soft cream, ideal for modern living.',
    'products.terracotta.desc': 'Warm earth tones that bring warmth and character to your table.',
    'products.cta': 'View details',
    'products.badges.foodGrade': 'Food grade',
    'products.badges.microwaveSafe': 'Microwave safe', 
    'products.badges.ovenSafe': 'Oven safe',
    
    // Collections
    'collections.title': 'Collections',
    'collections.subtitle': 'Bowls organized by style and occasion',
    'collections.minimalist.title': 'Minimalist',
    'collections.minimalist.desc': 'Clean and elegant designs for modern spaces',
    'collections.colorful.title': 'Colorful',
    'collections.colorful.desc': 'Vibrant and expressive, perfect for bringing life to your kitchen',
    'collections.classic.title': 'Classic',
    'collections.classic.desc': 'Timeless styles that never go out of fashion',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.email': 'hello@bowlcollection.com',
    'footer.phone': '+44 123 456 789',
    'footer.social': 'Follow us',
    'footer.rights': '© 2024 Bowl Collection. All rights reserved.',
    
    // Misc
    'promo.text': 'Special weekend offer: 15% off',
    'price.from': 'From',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};