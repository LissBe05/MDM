'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const documents = [
  { id: '1', name: 'Ordonnance - Dr. Nguema', patient: 'Jean Dupont', date: '2024-01-15' },
  { id: '2', name: 'Bilan sanguin', patient: 'Marie Mba', date: '2024-01-10' }
];

export default function DocumentsAdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Documents Médicaux</h1>
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <CardTitle>{doc.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Patient: {doc.patient}</p>
              <p>Date: {doc.date}</p>
              <Button variant="outline" size="sm" className="mt-2">
                Télécharger
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
