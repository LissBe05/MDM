'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const dummyDoctors = [
  { id: 'DOC001', name: 'Dr. Marie Nguema', specialty: 'Cardiologie' },
  { id: 'DOC002', name: 'Dr. Jean-Claude Mba', specialty: 'Généraliste' }
];

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState(dummyDoctors);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Gestion des Médecins</h1>
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader>
              <CardTitle>{doctor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Spécialité: {doctor.specialty}</p>
              <Button className="mt-2">Modifier</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
