import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import bowlCollection from "@/assets/bowl-collection.jpg";
import bowlBlue from "@/assets/bowl-blue.jpg";
import bowlCream from "@/assets/bowl-cream.jpg";

const collections = [
  {
    id: 'minimalist',
    image: bowlCream,
  },
  {
    id: 'colorful',
    image: bowlCollection,
  },
  {
    id: 'classic',
    image: bowlBlue,
  }
];

export const Collections = () => {
  const { t } = useLanguage();

  return (
    <section id="collections" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('collections.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('collections.subtitle')}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="product-card group cursor-pointer">
              {/* Collection Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={collection.image}
                  alt={t(`collections.${collection.id}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t(`collections.${collection.id}.title`)}
                  </h3>
                  <p className="text-sm opacity-90">
                    {t(`collections.${collection.id}.desc`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};