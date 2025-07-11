'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

export default function MonEspaceButton() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  const handleRedirect = () => {
    if (!isSignedIn) {
      toast.error("Veuillez vous connecter pour accéder à votre espace");
      router.push('/'); // ou ouvrir la modal d'auth si tu préfères
      return;
    }

    const role = user?.publicMetadata?.role;

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
      default:
        toast.error("Aucun rôle défini. Contactez un administrateur.");
    }
  };

  return (
    <div className="flex justify-end">
      <Button 
        onClick={handleRedirect} 
        className="bg-medical-blue text-white hover:bg-blue-700 text-sm px-5 py-3 rounded-md"
      >
        Accéder à mon espace
      </Button>
    </div>  
  );
}
