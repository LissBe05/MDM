'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Tableau de bord Administrateur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total : 145</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Cette semaine : 23</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documents médicaux</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stockés : 327</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
