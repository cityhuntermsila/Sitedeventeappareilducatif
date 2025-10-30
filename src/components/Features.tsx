import { BookOpen, Volume2, Users, Zap, Trophy, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Bibliothèque interactive",
    description: "Plus de 500 leçons structurées couvrant l'alphabet, la grammaire, le vocabulaire et la conversation."
  },
  {
    icon: Volume2,
    title: "Prononciation parfaite",
    description: "Reconnaissance vocale avancée avec feedback en temps réel pour améliorer votre accent."
  },
  {
    icon: Users,
    title: "Apprentissage adaptatif",
    description: "Intelligence artificielle qui s'adapte à votre niveau et votre rythme d'apprentissage."
  },
  {
    icon: Zap,
    title: "Résultats rapides",
    description: "Méthode scientifiquement prouvée pour apprendre 3x plus rapidement qu'avec les méthodes traditionnelles."
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Système de récompenses, défis quotidiens et classements pour rester motivé."
  },
  {
    icon: Globe,
    title: "Culture arabe",
    description: "Découvrez la richesse culturelle du monde arabe à travers des contenus authentiques."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Pourquoi choisir ArabiPad Pro ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une technologie de pointe au service de l'apprentissage linguistique
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-blue-50/30"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
