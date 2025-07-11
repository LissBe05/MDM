'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { UserIcon, PhoneIcon, CogIcon } from '@heroicons/react/24/outline';
import { useUser, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AuthDialog from './AuthDialog';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'patient' | 'doctor' | 'admin' | null>(null);
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  console.log("Header component rendered", { isSignedIn, user });

  const handleRoleSelection = (role: 'patient' | 'doctor' | 'admin') => {
    setSelectedRole(role);
    setIsAuthOpen(false);
    
    // Redirect based on role after authentication
    if (isSignedIn) {
      switch (role) {
        case 'patient':
          router.push('/patient');
          break;
        case 'doctor':
          router.push('/doctor');
          break;
        case 'admin':
          router.push('/admin');
          break;
      }
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" data-macaly="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center" data-macaly="logo">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900 hidden sm:inline">
                Mon Dossier Médical
              </span>
              <span className="ml-2 text-lg font-bold text-gray-900 sm:hidden">
                MDM
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8" data-macaly="nav">
            <a href="#fonctionnalites" className="text-gray-600 hover:text-medical-blue transition-colors">
              Fonctionnalités
            </a>
            <a href="#temoignages" className="text-gray-600 hover:text-medical-blue transition-colors">
              Témoignages
            </a>
            <a href="#actualites" className="text-gray-600 hover:text-medical-blue transition-colors">
              Actualités
            </a>
            <a href="#contact" className="text-gray-600 hover:text-medical-blue transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 hidden sm:inline">
                  Bonjour, {user?.firstName || 'Utilisateur'}
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <>
                <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-medical-blue hover:bg-blue-700 text-white text-sm px-3 py-2 sm:px-4 sm:py-2">
                      <span className="hidden sm:inline">Se connecter</span>
                      <span className="sm:hidden">Connexion</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center">Choisir votre profil</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <SignInButton mode="modal" fallbackRedirectUrl="/patient">
                        <Button 
                          variant="outline" 
                          className="h-16 text-gray-900 border-2 hover:border-medical-blue"
                          onClick={() => handleRoleSelection('patient')}
                        >
                          <UserIcon className="w-6 h-6 mr-3 text-medical-blue" />
                          <div className="text-left">
                            <div className="font-semibold">Patient</div>
                            <div className="text-sm text-gray-600">Gérer mon dossier médical</div>
                          </div>
                        </Button>
                      </SignInButton>
                      <SignInButton mode="modal" fallbackRedirectUrl="/admin">
                        <Button 
                          variant="outline" 
                          className="h-16 text-gray-900 border-2 hover:border-medical-green"
                          onClick={() => handleRoleSelection('doctor')}
                        >
                          <PhoneIcon className="w-6 h-6 mr-3 text-medical-green" />
                          <div className="text-left">
                            <div className="font-semibold">Médecin</div>
                            <div className="text-sm text-gray-600">Gérer mes patients</div>
                          </div>
                        </Button>
                      </SignInButton>
                      <SignInButton mode="modal" fallbackRedirectUrl="/admin">
                        <Button 
                          variant="outline" 
                          className="h-16 text-gray-900 border-2 hover:border-medical-orange"
                          onClick={() => handleRoleSelection('admin')}
                        >
                          <CogIcon className="w-6 h-6 mr-3 text-medical-orange" />
                          <div className="text-left">
                            <div className="font-semibold">Administrateur</div>
                            <div className="text-sm text-gray-600">Gérer la plateforme</div>
                          </div>
                        </Button>
                      </SignInButton>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}