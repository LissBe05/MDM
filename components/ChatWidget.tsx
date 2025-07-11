'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  UserIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  type?: 'text' | 'quick-reply';
  options?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bonjour ! Je suis votre assistant virtuel Mon Dossier Médical. Comment puis-je vous aider aujourd'hui ?",
    sender: 'bot',
    timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    type: 'quick-reply',
    options: [
      "Prendre un rendez-vous",
      "Informations sur les services",
      "Support technique",
      "Parler à un humain"
    ]
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  console.log("ChatWidget rendered, isOpen:", isOpen);

  const addMessage = (text: string, sender: 'user' | 'bot', options?: string[]) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      sender,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      type: options ? 'quick-reply' : 'text',
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    addMessage(inputMessage, 'user');
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      // Simple bot responses based on keywords
      const message = inputMessage.toLowerCase();
      
      if (message.includes('rendez-vous') || message.includes('rdv')) {
        addMessage(
          "Pour prendre un rendez-vous, vous pouvez vous connecter à votre espace patient ou appeler directement le +241 11 22 33 44. Souhaitez-vous que je vous aide avec autre chose ?",
          'bot',
          ["Se connecter", "Voir les horaires", "Autre question"]
        );
      } else if (message.includes('service') || message.includes('fonctionnalité')) {
        addMessage(
          "Nos services incluent : dossier médical numérique, téléconsultation, prise de rendez-vous en ligne, et suivi personnalisé. Que souhaitez-vous savoir en détail ?",
          'bot',
          ["Dossier médical", "Téléconsultation", "Tarifs", "Sécurité"]
        );
      } else if (message.includes('support') || message.includes('aide')) {
        addMessage(
          "Notre support technique est disponible 24h/24. Pour une aide immédiate, vous pouvez consulter notre FAQ ou demander à parler avec un agent.",
          'bot',
          ["FAQ", "Agent humain", "Guide d'utilisation"]
        );
      } else if (message.includes('humain') || message.includes('agent')) {
        addMessage(
          "Je vous mets en relation avec un de nos agents. Patientez quelques instants...",
          'bot'
        );
      } else {
        addMessage(
          "Merci pour votre message ! Un de nos conseillers vous répondra dans les plus brefs délais. Y a-t-il autre chose que je puisse vous aider ?",
          'bot',
          ["Prendre RDV", "Nos services", "Support technique"]
        );
      }
    }, 1500);
  };

  const handleQuickReply = (option: string) => {
    addMessage(option, 'user');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      switch (option) {
        case "Prendre un rendez-vous":
          addMessage(
            "Excellent ! Pour prendre un rendez-vous, connectez-vous à votre espace patient ou appelez le +241 11 22 33 44. Nos créneaux disponibles sont mis à jour en temps réel.",
            'bot',
            ["Se connecter", "Voir les créneaux", "Appeler"]
          );
          break;
        case "Informations sur les services":
          addMessage(
            "Nos services comprennent : dossier médical sécurisé, téléconsultation, prise de RDV, suivi personnalisé et bien plus. Que souhaitez-vous découvrir ?",
            'bot',
            ["Dossier médical", "Téléconsultation", "Tarifs"]
          );
          break;
        case "Support technique":
          addMessage(
            "Notre équipe technique est là pour vous aider ! Décrivez votre problème ou consultez notre base de connaissances.",
            'bot',
            ["Problème de connexion", "Bug signalé", "FAQ"]
          );
          break;
        default:
          addMessage(
            "Merci pour votre intérêt ! Comment puis-je vous aider davantage ?",
            'bot',
            ["Prendre RDV", "Nos services", "Support"]
          );
      }
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-medical-blue hover:bg-blue-700 text-white shadow-lg z-50 transition-all duration-300"
        data-macaly="chat-button"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-medical-blue text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-white text-medical-blue text-sm">
                    MD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">Support Mon Dossier Médical</CardTitle>
                  <div className="flex items-center space-x-1 text-xs text-blue-100">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>En ligne</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-600"
              >
                <XMarkIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  {message.sender === 'bot' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <ComputerDesktopIcon className="w-4 h-4 text-medical-blue" />
                      <span className="text-xs text-gray-500">Assistant</span>
                    </div>
                  )}
                  
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      message.sender === 'user'
                        ? 'bg-medical-blue text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                  </div>
                  
                  {message.options && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {message.options.map((option, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-medical-blue hover:text-white text-xs"
                          onClick={() => handleQuickReply(option)}
                        >
                          {option}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-medical-blue hover:bg-blue-700 text-white"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}