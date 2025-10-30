import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Specifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Spécifications techniques</Badge>
            <h2 className="mb-6">
              Conçu pour l'excellence éducative
            </h2>
            
            <Tabs defaultValue="hardware" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hardware">Matériel</TabsTrigger>
                <TabsTrigger value="software">Logiciel</TabsTrigger>
                <TabsTrigger value="content">Contenu</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hardware" className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Écran tactile</span>
                    <span>10.5" HD IPS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Processeur</span>
                    <span>Quad-core 2.4 GHz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Mémoire</span>
                    <span>4 GB RAM, 64 GB stockage</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Batterie</span>
                    <span>12 heures d'autonomie</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Audio</span>
                    <span>Haut-parleurs stéréo + micro</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Connectivité</span>
                    <span>WiFi 6, Bluetooth 5.0</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="software" className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Système</span>
                    <span>ArabiOS 3.0</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">IA d'apprentissage</span>
                    <span>Moteur adaptatif avancé</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Reconnaissance vocale</span>
                    <span>Précision 98%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Mises à jour</span>
                    <span>Automatiques et gratuites</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Mode hors ligne</span>
                    <span>Disponible</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Multi-utilisateurs</span>
                    <span>Jusqu'à 5 profils</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="space-y-4 mt-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Leçons</span>
                    <span>500+ leçons structurées</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Vocabulaire</span>
                    <span>10,000+ mots et phrases</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Exercices</span>
                    <span>2,000+ activités interactives</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Vidéos</span>
                    <span>200+ heures de contenu</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Niveaux</span>
                    <span>Débutant à Avancé</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Nouveaux contenus</span>
                    <span>Ajoutés mensuellement</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTcyMDgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Classroom"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
