'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const patients = [
  { id: 'pat001', name: 'Jean Dupont', dob: '1985-03-15', phone: '+241 06 12 34 56' },
  { id: 'pat002', name: 'Marie Nguema', dob: '1990-07-21', phone: '+241 07 65 43 21' }
];

export default function AdminPatientsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des Patients</h1>
      <div className="grid gap-4">
        {patients.map((patient) => (
          <Card key={patient.id}>
            <CardHeader>
              <CardTitle>{patient.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Date de naissance:</strong> {patient.dob}</p>
              <p><strong>Téléphone:</strong> {patient.phone}</p>
              <div className="mt-4 flex gap-2">
                <Link href={`/admin/patients/${patient.id}`}>
                  <Button>Voir / Modifier</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
