'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const newsArticles = [
  {
    id: 1,
    title: "Nouvelle Campagne de Vaccination contre la Fièvre Jaune au Gabon",
    excerpt: "Le Ministère de la Santé lance une campagne nationale de vaccination gratuite dans toutes les provinces du Gabon pour renforcer l'immunité collective.",
    image: "https://images.pexels.com/photos/7722843/pexels-photo-7722843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    author: "Dr. Sylvie Mayombo",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Prévention",
    tags: ["Vaccination", "Santé Publique", "Gabon"],
    featured: true
  },
  {
    id: 2,
    title: "Télémédecine : Une Révolution pour les Zones Rurales Gabonaises",
    excerpt: "L'adoption de la télémédecine permet maintenant aux populations rurales d'accéder aux soins spécialisés sans se déplacer vers les centres urbains.",
    image: "https://images.pexels.com/photos/5721384/pexels-photo-5721384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    author: "Jean-Pierre Nze",
    date: "2024-01-10",
    readTime: "7 min",
    category: "Innovation",
    tags: ["Télémédecine", "Zones Rurales", "Technologie"],
    featured: false
  },
  {
    id: 3,
    title: "Nouveau Centre de Cardiologie Moderne à Libreville",
    excerpt: "L'inauguration du nouveau centre de cardiologie équipé des dernières technologies médicales marque un tournant dans le traitement des maladies cardiaques.",
    image: "https://images.pexels.com/photos/5207018/pexels-photo-5207018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    author: "Dr. Michel Moussavou",
    date: "2024-01-05",
    readTime: "4 min",
    category: "Infrastructure",
    tags: ["Cardiologie", "Libreville", "Équipement"],
    featured: false
  }
];

export default function NewsSection() {
  console.log("NewsSection rendered");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prévention':
        return 'bg-medical-green text-white';
      case 'Innovation':
        return 'bg-medical-blue text-white';
      case 'Infrastructure':
        return 'bg-medical-orange text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="actualites" className="py-20 bg-gray-50" data-macaly="news-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Actualités Médicales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles de la santé au Gabon
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-xl">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={getCategoryColor(newsArticles[0].category)}>
                    {newsArticles[0].category}
                  </Badge>
                  <span className="text-sm font-medium text-green-600">Article vedette</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {newsArticles[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-base lg:text-lg leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-4 h-4" />
                    <span>{newsArticles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(newsArticles[0].date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{newsArticles[0].readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {newsArticles[0].tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="bg-medical-blue hover:bg-blue-700 text-white w-full sm:w-auto">
                  Lire l'article complet
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{formatDate(article.date)}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white"
                >
                  Lire la suite
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-medical-blue rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé des actualités médicales
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Recevez chaque semaine les dernières nouvelles de la santé au Gabon directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-medical-blue hover:bg-gray-100 px-6 py-3">
              S'abonner
            </Button>
          </div>
        </div>

        {/* View All Articles */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white"
          >
            Voir tous les articles
          </Button>
        </div>
      </div>
    </section>
  );
}