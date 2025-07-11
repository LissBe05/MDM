'use client';

import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

export default function ProfilPage() {
  const { user, isLoaded, isSignedIn } = useUser();

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumbers[0]?.phoneNumber || '');

  if (!isLoaded) return <p>Chargement...</p>;
  if (!isSignedIn) return <p>Non connecté</p>;

  const handleUpdate = async () => {
    try {
      await user?.update({
        firstName,
        lastName,
      });

      if (phoneNumber && user?.phoneNumbers?.length > 0) {
        const primaryPhone = user.phoneNumbers[0];
        if (primaryPhone.phoneNumber !== phoneNumber) {
          await user?.createPhoneNumber({ phoneNumber }); // Crée un nouveau numéro
          await primaryPhone.setReservedForSecondFactor({ reserved: false }); // Optionnel
          await primaryPhone.delete(); // Supprime l'ancien
        }
      }

      toast.success('Profil mis à jour avec succès !');
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Mon Profil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Prénom</label>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Nom</label>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Téléphone</label>
            <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <Button onClick={handleUpdate}>Sauvegarder</Button>
        </CardContent>
      </Card>
    </div>
  );
}
