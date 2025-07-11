'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("ContactSection rendered");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message envoyé avec succès !');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Adresse",
      info: "Avenue de la Démocratie, Libreville, Gabon",
      subInfo: "Centre-ville, près de l'hôpital central"
    },
    {
      icon: PhoneIcon,
      title: "Téléphone",
      info: "+241 11 22 33 44",
      subInfo: "Lundi - Vendredi : 8h - 18h"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      info: "contact@mondossiermedical.ga",
      subInfo: "Réponse sous 24h"
    },
    {
      icon: ClockIcon,
      title: "Horaires",
      info: "24h/24 - 7j/7",
      subInfo: "Support technique disponible"
    }
  ];

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je souhaiterais des informations sur Mon Dossier Médical.`;
    const whatsappUrl = `https://wa.me/24111223344?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white" data-macaly="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions sur Mon Dossier Médical
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.info}</p>
                        <p className="text-sm text-gray-500">{item.subInfo}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Contact Rapide</h4>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-medical-blue hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'mailto:contact@mondossiermedical.ga'}
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Envoyer un Email
                </Button>
                <Button 
                  className="w-full bg-medical-green hover:bg-green-700 text-white"
                  onClick={handleWhatsAppContact}
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Contacter via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white"
                  onClick={() => window.location.href = 'tel:+24111223344'}
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
                <p>Carte de localisation</p>
                <p className="text-sm">Libreville, Gabon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+241 XX XX XX XX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Select onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="info">Demande d'information</SelectItem>
                      <SelectItem value="support">Support technique</SelectItem>
                      <SelectItem value="rdv">Prise de rendez-vous</SelectItem>
                      <SelectItem value="partnership">Partenariat médical</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMethod">Méthode de contact préférée</Label>
                  <Select 
                    onValueChange={(value) => handleInputChange('contactMethod', value)}
                    defaultValue="email"
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Téléphone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Décrivez votre demande..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-medical-blue hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}