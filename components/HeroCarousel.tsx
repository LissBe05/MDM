'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { HeartIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid';

const slides = [
  {
    id: 1,
    title: "Votre Santé, Notre Priorité",
    subtitle: "Accédez à vos soins de santé 24h/24, 7j/7",
    description: "Gérez votre dossier médical en ligne, prenez vos rendez-vous et consultez vos résultats d'examens en toute sécurité.",
    icon: HeartIcon,
    bgColor: "bg-gradient-to-br from-medical-blue to-blue-600",
    textColor: "text-white",
    image: "https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 2,
    title: "Suivi Médical Personnalisé",
    subtitle: "Une prise en charge adaptée à vos besoins",
    description: "Nos médecins qualifiés vous accompagnent avec des consultations personnalisées et un suivi médical de qualité.",
    icon: ShieldCheckIcon,
    bgColor: "bg-gradient-to-br from-medical-green to-green-600",
    textColor: "text-white",
    image: "https://images.pexels.com/photos/4989144/pexels-photo-4989144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 3,
    title: "Téléconsultation Rapide",
    subtitle: "Consultez depuis chez vous",
    description: "Bénéficiez de consultations médicales à distance avec nos praticiens, sans vous déplacer, partout au Gabon.",
    icon: ClockIcon,
    bgColor: "bg-gradient-to-br from-medical-orange to-orange-600",
    textColor: "text-white",
    image: "https://images.pexels.com/photos/5327914/pexels-photo-5327914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  console.log("HeroCarousel rendered, current slide:", currentSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden" data-macaly="hero-carousel">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const IconComponent = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`${slide.bgColor} h-full flex items-center relative overflow-hidden`}>
                {/* Mobile background image */}
                <div className="absolute inset-0 lg:hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content */}
                    <div className={`${slide.textColor} space-y-4 sm:space-y-6 z-10 relative`}>
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="text-xs sm:text-sm font-medium opacity-90">
                          Mon Dossier Médical - Gabon
                        </span>
                      </div>
                      
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90">
                        {slide.subtitle}
                      </p>
                      
                      <p className="text-base sm:text-lg opacity-80 max-w-xl">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <Button 
                          size="lg" 
                          className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm sm:text-base"
                        >
                          Commencer maintenant
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-base"
                        >
                          En savoir plus
                        </Button>
                      </div>
                    </div>
                    
                    {/* Medical Professional Image */}
                    <div className="hidden lg:flex justify-center items-center">
                      <div className="relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-80 h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl ring-4 ring-white/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                            <IconComponent className="w-8 h-8 mx-auto text-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all z-20"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all z-20"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all z-20"
      >
        <span className="text-white text-xs sm:text-sm">
          {isAutoPlaying ? '⏸️' : '▶️'}
        </span>
      </button>
    </section>
  );
}