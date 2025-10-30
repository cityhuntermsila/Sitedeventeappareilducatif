import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, ShoppingCart } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "299",
    description: "Parfait pour débuter",
    features: [
      "Appareil ArabiPad Pro",
      "500+ leçons intégrées",
      "Mises à jour gratuites",
      "Garantie 1 an",
      "Support par email"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "399",
    description: "Le meilleur rapport qualité-prix",
    features: [
      "Appareil ArabiPad Pro",
      "Tout le contenu Standard",
      "Étui de protection premium",
      "Stylet intelligent inclus",
      "Garantie 2 ans",
      "Support prioritaire 24/7",
      "Contenus exclusifs"
    ],
    popular: true
  },
  {
    name: "Famille",
    price: "699",
    description: "Idéal pour toute la famille",
    features: [
      "2 appareils ArabiPad Pro",
      "Tout le contenu Premium",
      "5 profils utilisateurs",
      "Étuis et stylets inclus",
      "Garantie 3 ans",
      "Support VIP dédié",
      "Accès aux nouveautés en avant-première"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Choisissez votre formule
          </h2>
          <p className="text-xl text-gray-600">
            Investissez dans l'avenir linguistique de votre famille
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-blue-500 border-2 shadow-2xl scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                  Le plus populaire
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl">{plan.price}€</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Commander
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            🚚 Livraison gratuite • 30 jours satisfait ou remboursé • Paiement sécurisé
          </p>
        </div>
      </div>
    </section>
  );
}
