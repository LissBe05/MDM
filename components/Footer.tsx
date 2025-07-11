'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  console.log("Footer rendered");

  const footerLinks = {
    services: [
      { name: "Dossier médical numérique", href: "/services/dossier" },
      { name: "Téléconsultation", href: "/services/teleconsultation" },
      { name: "Prise de rendez-vous", href: "/services/rendez-vous" },
      { name: "Suivi personnalisé", href: "/services/suivi" },
    ],
    support: [
      { name: "Centre d'aide", href: "/aide" },
      { name: "FAQ", href: "/faq" },
      { name: "Guide d'utilisation", href: "/guide" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Conditions d'utilisation", href: "/conditions" },
      { name: "Politique de confidentialité", href: "/confidentialite" },
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Cookies", href: "/cookies" },
    ],
    about: [
      { name: "À propos", href: "/about" },
      { name: "Notre équipe", href: "/equipe" },
      { name: "Carrières", href: "/carrieres" },
      { name: "Partenaires", href: "/partenaires" },
    ]
  };

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/mondossiermedical", icon: "📘" },
    { name: "Twitter", href: "https://twitter.com/mondossiermedical", icon: "🐦" },
    { name: "LinkedIn", href: "https://linkedin.com/company/mondossiermedical", icon: "💼" },
    { name: "Instagram", href: "https://instagram.com/mondossiermedical", icon: "📸" },
    { name: "YouTube", href: "https://youtube.com/mondossiermedical", icon: "📺" },
  ];

  const certifications = [
    {
      icon: ShieldCheckIcon,
      name: "Sécurité ISO 27001",
      description: "Certification sécurité des données"
    },
    {
      icon: AcademicCapIcon,
      name: "Agréé Ministère Santé",
      description: "Agréé par le Ministère de la Santé du Gabon"
    },
    {
      icon: GlobeAltIcon,
      name: "Conformité RGPD",
      description: "Respecte les normes européennes"
    },
    {
      icon: HeartIcon,
      name: "Qualité médicale",
      description: "Approuvé par l'Ordre des Médecins"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white" data-macaly="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MD</span>
              </div>
              <span className="ml-3 text-xl font-bold">Mon Dossier Médical</span>
            </div>
            <p className="text-gray-400 mb-6">
              Révolutionnons ensemble la santé numérique au Gabon. Votre santé, notre priorité.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm text-gray-400">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm text-gray-400">+241 11 22 33 44</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm text-gray-400">contact@mondossiermedical.ga</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Recevez les dernières actualités santé
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Votre email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-medical-blue hover:bg-blue-700">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-8 text-center">
            Certifications & Agréments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-gray-400">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              {footerLinks.about.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Mon Dossier Médical. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Fait avec</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>au Gabon</span>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}