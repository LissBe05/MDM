'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "Dr. Marie Nguema",
    role: "Cardiologue",
    location: "Libreville, Gabon",
    avatar: "https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    rating: 5,
    text: "Cette plateforme a révolutionné ma pratique médicale. Je peux maintenant suivre mes patients à distance et gérer leurs dossiers de manière efficace. L'interface est intuitive et sécurisée.",
    specialty: "Cardiologie",
    experience: "15 ans d'expérience"
  },
  {
    id: 2,
    name: "Fatima Obame",
    role: "Patiente",
    location: "Port-Gentil, Gabon",
    avatar: "https://images.pexels.com/photos/5452251/pexels-photo-5452251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    rating: 5,
    text: "Enfin une solution qui me permet de gérer ma santé facilement ! Je peux prendre mes rendez-vous en ligne et accéder à tous mes résultats médicaux. Service client exceptionnel.",
    condition: "Suivi diabète",
    joinDate: "Membre depuis 2 ans"
  },
  {
    id: 3,
    name: "Dr. Jean-Claude Mba",
    role: "Pédiatre",
    location: "Franceville, Gabon",
    avatar: "https://images.pexels.com/photos/4989134/pexels-photo-4989134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    rating: 5,
    text: "Excellent outil pour le suivi des enfants. Les parents peuvent facilement partager les informations importantes et je peux réagir rapidement en cas de besoin. Recommandé !",
    specialty: "Pédiatrie",
    experience: "12 ans d'expérience"
  },
  {
    id: 4,
    name: "Pierre Ndong",
    role: "Patient",
    location: "Oyem, Gabon",
    avatar: "https://images.pexels.com/photos/4989133/pexels-photo-4989133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    rating: 5,
    text: "Grâce à la téléconsultation, je peux consulter mon médecin depuis ma ville natale. Plus besoin de voyager jusqu'à Libreville pour un suivi de routine. Très pratique !",
    condition: "Suivi hypertension",
    joinDate: "Membre depuis 1 an"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  console.log("TestimonialsSection rendered, current testimonial:", currentTestimonial);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="temoignages" className="py-20 bg-white" data-macaly="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages de Nos Utilisateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que disent nos médecins et patients à travers le Gabon
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-medical-blue">
                    <AvatarImage src={testimonials[currentTestimonial].avatar} />
                    <AvatarFallback className="bg-medical-blue text-white text-xl sm:text-2xl">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base sm:text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-medical-blue font-medium text-sm sm:text-base">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {testimonials[currentTestimonial].location}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonials[currentTestimonial].role === 'Patient' || testimonials[currentTestimonial].role === 'Patiente' 
                        ? `${testimonials[currentTestimonial].condition} • ${testimonials[currentTestimonial].joinDate}`
                        : `${testimonials[currentTestimonial].specialty} • ${testimonials[currentTestimonial].experience}`
                      }
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'ring-2 ring-medical-blue shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-3 leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-medical-blue mb-2">98%</div>
            <div className="text-gray-600">Satisfaction patients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-medical-green mb-2">150+</div>
            <div className="text-gray-600">Médecins partenaires</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-medical-orange mb-2">24/7</div>
            <div className="text-gray-600">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
}