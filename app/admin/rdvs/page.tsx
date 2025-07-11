'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const appointments = [
  { id: '1', patient: 'Jean Dupont', doctor: 'Dr. Nguema', date: '2024-01-20', status: 'confirmé' },
  { id: '2', patient: 'Marie Mba', doctor: 'Dr. Mba', date: '2024-01-25', status: 'en attente' }
];

export default function AppointmentsAdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Rendez-vous</h1>
      <div className="space-y-4">
        {appointments.map((rdv) => (
          <Card key={rdv.id}>
            <CardHeader>
              <CardTitle>RDV {rdv.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Patient: {rdv.patient}</p>
              <p>Médecin: {rdv.doctor}</p>
              <p>Statut: {rdv.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
