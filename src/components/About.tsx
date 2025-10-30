import { Card } from "./ui/card";
import { Target, Heart, Award, Users, Globe, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description: "Rendre l'apprentissage de la langue arabe accessible à tous, partout dans le monde, grâce à une technologie innovante et engageante."
  },
  {
    icon: Heart,
    title: "Notre Passion",
    description: "Nous croyons que l'éducation linguistique est un pont vers la compréhension culturelle et l'enrichissement personnel."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous nous engageons à fournir des produits de la plus haute qualité avec un contenu pédagogique soigneusement conçu."
  }
];

const team = [
  {
    name: "Dr. Layla Mansour",
    role: "Fondatrice & CEO",
    initials: "LM",
    description: "Docteure en linguistique arabe, 15 ans d'expérience en éducation"
  },
  {
    name: "Karim Zidane",
    role: "Directeur Technique",
    initials: "KZ",
    description: "Expert en IA et apprentissage adaptatif"
  },
  {
    name: "Amina El Fassi",
    role: "Directrice Pédagogique",
    initials: "AE",
    description: "Spécialiste en méthodologie d'enseignement des langues"
  },
  {
    name: "Omar Benchekroun",
    role: "Directeur Marketing",
    initials: "OB",
    description: "Passionné par l'innovation éducative"
  }
];

const milestones = [
  { year: "2019", event: "Fondation d'ArabiPad", description: "Lancement de l'idée et développement du prototype" },
  { year: "2020", event: "Première version", description: "Lancement de l'ArabiPad Pro sur le marché français" },
  { year: "2022", event: "15 000 utilisateurs", description: "Expansion internationale et nouveaux contenus" },
  { year: "2024", event: "Prix Innovation EdTech", description: "Reconnaissance internationale de notre technologie" },
  { year: "2025", event: "Nouvelle génération", description: "Lancement de l'ArabiPad Pro avec IA avancée" }
];

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Qui sommes-nous ?</h1>
            <p className="text-xl text-blue-100 mb-8">
              Nous sommes une équipe passionnée dédiée à révolutionner l'apprentissage de la langue arabe 
              grâce à la technologie et l'innovation pédagogique.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  ArabiPad Pro est né d'une vision simple : créer un outil qui rendrait l'apprentissage 
                  de l'arabe aussi naturel et intuitif que possible. Notre fondatrice, Dr. Layla Mansour, 
                  a constaté pendant ses années d'enseignement que les méthodes traditionnelles ne 
                  répondaient pas aux besoins des apprenants modernes.
                </p>
                <p>
                  En combinant son expertise linguistique avec les dernières technologies en intelligence 
                  artificielle et apprentissage adaptatif, elle a créé un appareil révolutionnaire qui 
                  s'adapte au rythme et au style d'apprentissage de chaque utilisateur.
                </p>
                <p>
                  Aujourd'hui, plus de 15 000 personnes à travers le monde utilisent ArabiPad Pro pour 
                  découvrir la richesse de la langue arabe, que ce soit pour des raisons personnelles, 
                  professionnelles ou culturelles.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661860890799-ae6cac7c71b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYXJhYmljfGVufDF8fHx8MTc2MTgyNTk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Learning Experience"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Nos Valeurs</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Notre Parcours</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                    <div className="md:w-1/2">
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="text-2xl text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-4">Notre Équipe</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Des experts passionnés au service de votre apprentissage
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{member.initials}</span>
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <div className="text-blue-600 mb-3">{member.role}</div>
                <p className="text-sm text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl mb-2">15,000+</div>
              <div className="text-blue-100">Utilisateurs actifs</div>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl mb-2">50+</div>
              <div className="text-blue-100">Pays</div>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl mb-2">5</div>
              <div className="text-blue-100">Prix internationaux</div>
            </div>
            <div>
              <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl mb-2">98%</div>
              <div className="text-blue-100">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
