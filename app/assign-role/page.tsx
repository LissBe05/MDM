'use client';

import { useUser, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

const roles = ['patient', 'doctor', 'admin'];

export default function AssignRolePage() {
  const { user, isSignedIn } = useUser();
  const { user: clerkUser } = useClerk();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSignedIn && user?.unsafeMetadata?.role) {
      // Redirige automatiquement si un rôle est déjà défini
      const role = user.unsafeMetadata.role;
      router.push(`/${role}`);
    }
  }, [isSignedIn, user, router]);

  const handleRoleAssign = async (role: string) => {
    if (!clerkUser) return;

    try {
      setLoading(true);
      await clerkUser.update({
        unsafeMetadata: {
          role,
        },
      });

      toast.success(`Rôle ${role} assigné avec succès !`);
      router.push(`/${role}`);
    } catch (error) {
      console.error('Erreur lors de l’assignation du rôle:', error);
      toast.error('Erreur lors de l’assignation du rôle.');
    } finally {
      setLoading(false);
    }
  };

  if (!isSignedIn) {
    return <div className="text-center mt-10">Veuillez vous connecter pour continuer.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 text-center space-y-6">
      <h1 className="text-2xl font-bold">Choisissez votre rôle</h1>
      <div className="flex flex-col space-y-4">
        {roles.map((role) => (
          <Button
            key={role}
            onClick={() => handleRoleAssign(role)}
            className="capitalize"
            disabled={loading}
          >
            {loading ? 'Chargement...' : `Je suis un ${role}`}
          </Button>
        ))}
      </div>
    </div>
  );
}
