import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import bowlBlue from "@/assets/bowl-blue.jpg";
import bowlCream from "@/assets/bowl-cream.jpg";
import bowlTerracotta from "@/assets/bowl-terracotta.jpg";
import { CheckCircle } from "lucide-react";

const products = [
  {
    id: 'blue',
    image: bowlBlue,
    price: '€24.99',
    badges: ['foodGrade', 'microwaveSafe', 'ovenSafe']
  },
  {
    id: 'cream', 
    image: bowlCream,
    price: '€22.99',
    badges: ['foodGrade', 'microwaveSafe']
  },
  {
    id: 'terracotta',
    image: bowlTerracotta, 
    price: '€26.99',
    badges: ['foodGrade', 'ovenSafe']
  }
];

export const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={t(`products.${product.id}.name`)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t(`products.${product.id}.name`)}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {t(`products.${product.id}.desc`)}
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge) => (
                    <div key={badge} className="feature-badge">
                      <CheckCircle size={14} />
                      {t(`products.badges.${badge}`)}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    {product.price}
                  </div>
                  <Button variant="outline">
                    {t('products.cta')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};