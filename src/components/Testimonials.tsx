import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatima El Amrani",
    role: "Enseignante",
    initials: "FE",
    rating: 5,
    text: "ArabiPad Pro a transformé ma façon d'enseigner l'arabe. Mes élèves sont plus engagés et progressent beaucoup plus rapidement qu'avant."
  },
  {
    name: "Mohammed Benali",
    role: "Parent",
    initials: "MB",
    rating: 5,
    text: "Mes enfants adorent utiliser l'ArabiPad. C'est comme un jeu pour eux, mais ils apprennent vraiment. Je recommande vivement !"
  },
  {
    name: "Sarah Dubois",
    role: "Étudiante universitaire",
    initials: "SD",
    rating: 5,
    text: "J'ai essayé plusieurs méthodes pour apprendre l'arabe. ArabiPad Pro est de loin la plus efficace. La reconnaissance vocale est impressionnante."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-gray-600">
            Rejoignez des milliers d'apprenants satisfaits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500">
                  <AvatarFallback className="bg-transparent text-white">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
