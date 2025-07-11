'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CalendarDaysIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    id: 1,
    icon: CalendarDaysIcon,
    title: "Prise de Rendez-vous Intelligente",
    description: "Réservez vos consultations en ligne 24h/24 avec nos médecins partenaires partout au Gabon.",
    details: [
      "Agenda temps réel des praticiens",
      "Rappels automatiques SMS/Email",
      "Modification et annulation faciles",
      "Géolocalisation des cabinets"
    ],
    color: "text-medical-blue",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    image: "https://images.pexels.com/photos/6823602/pexels-photo-6823602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 2,
    icon: DocumentTextIcon,
    title: "Dossier Médical Sécurisé",
    description: "Centralisez tous vos documents médicaux dans un espace personnel ultra-sécurisé.",
    details: [
      "Historique médical complet",
      "Ordonnances numériques",
      "Résultats d'examens",
      "Partage sécurisé avec vos médecins"
    ],
    color: "text-medical-green",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
    image: "https://images.pexels.com/photos/6823514/pexels-photo-6823514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 3,
    icon: VideoCameraIcon,
    title: "Téléconsultation Médicale",
    description: "Consultez vos médecins à distance via notre plateforme de vidéoconférence sécurisée.",
    details: [
      "Consultations HD en temps réel",
      "Prescription électronique",
      "Enregistrement des sessions",
      "Support technique 24/7"
    ],
    color: "text-medical-orange",
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
    image: "https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 4,
    icon: ShieldCheckIcon,
    title: "Sécurité & Confidentialité",
    description: "Vos données de santé sont protégées par un chiffrement de niveau bancaire.",
    details: [
      "Chiffrement AES-256",
      "Conformité RGPD",
      "Authentification à deux facteurs",
      "Audit de sécurité régulier"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
    image: "https://images.pexels.com/photos/6823504/pexels-photo-6823504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  }
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  console.log("FeaturesSection rendered, active feature:", activeFeature);

  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50" data-macaly="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités Avancées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre plateforme révolutionne la gestion de votre santé au Gabon
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={`relative overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive ? 'shadow-xl scale-105' : 'hover:shadow-lg'
                } ${feature.hoverColor}`}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Feature Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-full ${feature.bgColor} flex items-center justify-center shadow-lg`}>
                    <IconComponent className={`w-5 h-5 ${feature.color}`} />
                  </div>
                </div>

                <CardHeader className="text-center pb-2 pt-4">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center px-4 pb-4">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Details - show on hover */}
                  <div className={`transition-all duration-300 ${
                    isActive ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="border-t pt-4 space-y-2">
                      {feature.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')} mr-2 flex-shrink-0`} />
                          <span className="text-left">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`mt-4 ${feature.color} hover:${feature.bgColor} transition-all duration-300 text-sm`}
                  >
                    En savoir plus
                  </Button>
                </CardContent>
                
                {/* Animated background effect */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                  isActive ? 'opacity-5' : ''
                } ${feature.bgColor}`} />
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-medical-blue hover:bg-blue-700 text-white font-semibold px-8 py-3"
          >
            Découvrir toutes les fonctionnalités
          </Button>
        </div>
      </div>
    </section>
  );
}