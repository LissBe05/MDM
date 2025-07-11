'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { HeartIcon, UserGroupIcon, ShieldCheckIcon, DevicePhoneMobileIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/solid';

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "MON DOSSIER MÉDICAL",
      subtitle: "Révolutionner la santé numérique au Gabon",
      content: (
        <div className="text-center space-y-6">
          <div className="mx-auto w-24 h-24 bg-medical-blue rounded-full flex items-center justify-center mb-6">
            <HeartIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MON DOSSIER MÉDICAL
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Révolutionner la santé numérique au Gabon
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <p className="text-lg text-white">
              Présenté par <span className="font-bold text-gabon-gold">TSONO-LISS</span>
            </p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-medical-blue to-blue-800",
      animation: "fade-in"
    },
    {
      id: 2,
      title: "CONTEXTE & PROBLÉMATIQUE",
      subtitle: "Les défis de la santé au Gabon",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contexte & Problématique
            </h2>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">🏥 Accès difficile aux soins</h3>
                <p className="text-white/90 text-sm">Zones rurales éloignées des centres médicaux</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">📋 Dossiers médicaux dispersés</h3>
                <p className="text-white/90 text-sm">Pas de centralisation des informations</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">⏰ Délais d'attente prolongés</h3>
                <p className="text-white/90 text-sm">Prise de rendez-vous complexe et lente</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Médecin africain"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-red-600 to-red-800",
      animation: "slide-up"
    },
    {
      id: 3,
      title: "OBJECTIFS & SOLUTIONS",
      subtitle: "Notre vision pour transformer la santé",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Objectifs & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <DevicePhoneMobileIcon className="w-12 h-12 text-gabon-gold mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Digitalisation</h3>
              <p className="text-white/90 text-sm">Dématérialisation complète des dossiers médicaux</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <UserGroupIcon className="w-12 h-12 text-gabon-gold mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Accessibilité</h3>
              <p className="text-white/90 text-sm">Soins de santé accessibles 24h/24, 7j/7</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <ShieldCheckIcon className="w-12 h-12 text-gabon-gold mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Sécurité</h3>
              <p className="text-white/90 text-sm">Protection maximale des données sensibles</p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-medical-green to-green-800",
      animation: "zoom-in"
    },
    {
      id: 4,
      title: "CIBLES PRINCIPALES",
      subtitle: "Nos utilisateurs au cœur du système",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Cibles Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="font-bold text-white mb-2">Médecins</h3>
              <p className="text-white/90 text-sm">Gestion patients, planning, téléconsultation</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧑‍🦱</span>
              </div>
              <h3 className="font-bold text-white mb-2">Patients</h3>
              <p className="text-white/90 text-sm">Dossier personnel, RDV, résultats</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-medical-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="font-bold text-white mb-2">Administrateurs</h3>
              <p className="text-white/90 text-sm">Gestion plateforme, analytics, support</p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-medical-orange to-orange-800",
      animation: "slide-right"
    },
    {
      id: 5,
      title: "FONCTIONNALITÉS PRINCIPALES",
      subtitle: "Un écosystème complet pour la santé",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Fonctionnalités Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Prise de RDV intelligente</h3>
                  <p className="text-white/80 text-sm">Booking en ligne 24h/24</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-medical-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Téléconsultation</h3>
                  <p className="text-white/80 text-sm">Consultations vidéo HD</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-medical-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🔒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Dossier sécurisé</h3>
                  <p className="text-white/80 text-sm">Chiffrement AES-256</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Chat temps réel</h3>
                  <p className="text-white/80 text-sm">Communication instantanée</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Analytics avancés</h3>
                  <p className="text-white/80 text-sm">Tableaux de bord intelligents</p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Multi-plateformes</h3>
                  <p className="text-white/80 text-sm">Web, mobile, tablette</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
      animation: "slide-left"
    },
    {
      id: 6,
      title: "CAS D'USAGE TYPIQUE",
      subtitle: "Parcours utilisateur patient",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Cas d'Usage Typique
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">Connexion</h3>
                <p className="text-white/80 text-xs">Authentification sécurisée</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">Recherche</h3>
                <p className="text-white/80 text-xs">Médecin disponible</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-medical-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">Réservation</h3>
                <p className="text-white/80 text-xs">Rendez-vous confirmé</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">Consultation</h3>
                <p className="text-white/80 text-xs">Téléconsultation HD</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">Suivi</h3>
                <p className="text-white/80 text-xs">Résultats & ordonnances</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      animation: "bounce-in"
    },
    {
      id: 7,
      title: "INTERFACE UTILISATEUR",
      subtitle: "Design moderne et intuitif",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Interface Utilisateur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-white mb-4">🎨 Design System</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-medical-blue rounded"></div>
                    <span className="text-white/90 text-sm">Bleu médical #0066CC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-medical-green rounded"></div>
                    <span className="text-white/90 text-sm">Vert santé #00A86B</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-medical-orange rounded"></div>
                    <span className="text-white/90 text-sm">Orange urgence #FF6B35</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-white mb-4">📱 Responsive</h3>
                <p className="text-white/90 text-sm">Mobile-first, adaptatif sur tous les écrans</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-white mb-4">✨ Caractéristiques</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• Animations fluides et transitions CSS</li>
                <li>• Sidebar intelligente collapsible</li>
                <li>• Thème adaptatif clair/sombre</li>
                <li>• Accessibilité WCAG optimisée</li>
                <li>• Notifications temps réel</li>
                <li>• Navigation intuitive</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-pink-600 to-pink-800",
      animation: "rotate-in"
    },
    {
      id: 8,
      title: "STACK TECHNIQUE",
      subtitle: "Technologies modernes et performantes",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Stack Technique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-white mb-3">🎯 Frontend</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded"></div>
                    <span className="text-white/90 text-sm">Next.js 14 (React)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-white/90 text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    <span className="text-white/90 text-sm">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-700 rounded"></div>
                    <span className="text-white/90 text-sm">shadcn/ui</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-white mb-3">🔐 Authentification</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded"></div>
                    <span className="text-white/90 text-sm">Clerk Auth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-white/90 text-sm">Middleware Protection</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-white mb-3">🚀 Déploiement</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded"></div>
                    <span className="text-white/90 text-sm">Vercel (Serverless)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-white/90 text-sm">CI/CD automatisé</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-white mb-3">🔧 Outils</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-400 rounded"></div>
                    <span className="text-white/90 text-sm">React Hot Toast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-white/90 text-sm">Heroicons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-600 rounded"></div>
                    <span className="text-white/90 text-sm">ESLint + Prettier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      animation: "flip-in"
    },
    {
      id: 9,
      title: "MERCI",
      subtitle: "Questions et discussions",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="mx-auto w-32 h-32 bg-gabon-gold rounded-full flex items-center justify-center">
              <span className="text-6xl">🙏</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Merci pour votre attention
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Questions & Discussions
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-white mb-4 text-xl">Contact</h3>
            <div className="space-y-2 text-white/90">
              <p>📧 Email: eunicetsonoliss@gmail.com</p>
              <p>📱 Téléphone: +241 076 250 589 </p>
              <p>🌐 Site: https://mdm-nu.vercel.app/</p>
              <p>📍 Libreville, Gabon</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center">
              <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-medical-orange rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      animation: "fade-in"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isAnimating) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          setIsAutoPlaying(!isAutoPlaying);
          break;
        case 'Escape':
          window.location.href = '/';
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating, isAutoPlaying]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Slide Content */}
      <div className="relative h-screen flex items-center justify-center p-4">
        <div className={`${slides[currentSlide].bgColor} w-full h-full rounded-lg relative overflow-hidden transition-all duration-700 ease-in-out`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <div className={`w-full max-w-6xl mx-auto transition-all duration-700 transform ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          onClick={prevSlide}
          disabled={isAnimating}
          size="sm"
          className="bg-white/20 hover:bg-white/30 text-white border-none"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={isAnimating}
          size="sm"
          className="bg-white/20 hover:bg-white/30 text-white border-none"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>

      {/* Auto-play Control */}
      <div className="absolute top-8 right-8">
        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          size="sm"
          className="bg-white/20 hover:bg-white/30 text-white border-none"
        >
          {isAutoPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-20 left-8 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <span className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Home Button */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <a
          href="/"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-semibold transition-all duration-300 flex items-center space-x-2"
        >
          <span>🏠</span>
          <span>Retour à l'accueil</span>
        </a>
      </div>

      {/* Keyboard Navigation Info */}
      <div className="absolute bottom-8 right-8 text-white/70 text-sm">
        <p>← → pour naviguer • Espace pour auto-play • Échap pour quitter</p>
      </div>
    </div>
  );
}