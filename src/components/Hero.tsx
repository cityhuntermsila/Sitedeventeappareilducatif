import { Button } from "./ui/button";
import { ShoppingCart, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm">✨ Innovation en éducation linguistique</span>
            </div>
            
            <h1 className="mb-6">
              ArabiPad Pro
              <span className="block text-blue-200 mt-2">
                L'avenir de l'apprentissage de l'arabe
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100">
              Un appareil interactif révolutionnaire conçu pour rendre l'apprentissage de la langue arabe 
              accessible, amusant et efficace pour tous les âges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Commander maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Voir la démo
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-1">15K+</div>
                <div className="text-sm text-blue-200">Utilisateurs actifs</div>
              </div>
              <div>
                <div className="text-3xl mb-1">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl mb-1">500+</div>
                <div className="text-sm text-blue-200">Leçons</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608106055806-e892769d2e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBsZWFybmluZyUyMGRldmljZXxlbnwxfHx8fDE3NjE4MjU5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ArabiPad Pro Device"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
