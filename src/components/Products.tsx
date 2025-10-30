import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "ArabiPad Pro Standard",
    price: 299,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 324,
    features: ["Écran 10.5\" HD", "500+ leçons", "Garantie 1 an"],
    badge: null,
    stock: "En stock"
  },
  {
    id: 2,
    name: "ArabiPad Pro Premium",
    price: 399,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    reviews: 521,
    features: ["Tout le Standard +", "Étui premium", "Stylet intelligent", "Support 24/7"],
    badge: "Populaire",
    stock: "En stock"
  },
  {
    id: 3,
    name: "Pack Famille (2 appareils)",
    price: 699,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 189,
    features: ["2 appareils Premium", "5 profils", "Garantie 3 ans", "Support VIP"],
    badge: "Meilleure valeur",
    stock: "Stock limité"
  }
];

const accessories = [
  {
    id: 4,
    name: "Étui de protection Premium",
    price: 39,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.3,
    reviews: 156
  },
  {
    id: 5,
    name: "Stylet intelligent",
    price: 49,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 6,
    name: "Support ajustable",
    price: 29,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    reviews: 98
  },
  {
    id: 7,
    name: "Casque audio adapté enfants",
    price: 35,
    image: "https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    reviews: 187
  }
];

export function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Nos Produits</h1>
            <p className="text-xl text-blue-100">
              Découvrez notre gamme complète d'appareils et accessoires pour l'apprentissage de l'arabe
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Appareils ArabiPad Pro</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-orange-500 text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl text-blue-600">{product.price}€</div>
                    <Badge variant={product.stock === "En stock" ? "default" : "secondary"}>
                      {product.stock}
                    </Badge>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Accessoires</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessories.map((accessory) => (
              <Card key={accessory.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-40 object-cover"
                />
                
                <div className="p-4">
                  <h4 className="mb-2">{accessory.name}</h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(accessory.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({accessory.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl text-blue-600">{accessory.price}€</span>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Besoin d'aide pour choisir ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Notre équipe est là pour vous guider vers le produit qui correspond le mieux à vos besoins
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Contactez-nous
          </Button>
        </div>
      </section>
    </div>
  );
}
