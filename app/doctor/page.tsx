'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  UsersIcon, 
  CalendarDaysIcon, 
  ChartBarIcon, 
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ClockIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const router = useRouter();

  console.log("Admin/Doctor dashboard loaded");

  const handleLogout = () => {
    toast.success('Déconnexion réussie');
    router.push('/');
  };

  const doctorData = {
    name: "Dr. Marie Nguema",
    specialty: "Cardiologie",
    license: "MD12345",
    email: "marie.nguema@hospital.ga",
    patients: 142,
    appointments: 23
  };

  const todayStats = {
    totalPatients: 142,
    todayAppointments: 23,
    pendingResults: 8,
    emergencies: 2
  };

  const recentPatients = [
    {
      id: "1",
      name: "Jean Dupont",
      age: 45,
      condition: "Hypertension",
      lastVisit: "2024-01-15",
      status: "stable",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "2",
      name: "Marie Obame",
      age: 32,
      condition: "Diabète Type 2",
      lastVisit: "2024-01-14",
      status: "monitoring",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "3",
      name: "Pierre Nze",
      age: 58,
      condition: "Suivi post-opératoire",
      lastVisit: "2024-01-13",
      status: "recovery",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: "4",
      name: "Fatima Mbadinga",
      age: 28,
      condition: "Grossesse - Suivi",
      lastVisit: "2024-01-12",
      status: "stable",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const todayAppointments = [
    {
      id: "1",
      time: "09:00",
      patient: "Jean Dupont",
      type: "Consultation",
      duration: "30 min",
      status: "confirmed"
    },
    {
      id: "2",
      time: "10:30",
      patient: "Marie Obame",
      type: "Suivi",
      duration: "15 min",
      status: "confirmed"
    },
    {
      id: "3",
      time: "14:00",
      patient: "Pierre Nze",
      type: "Contrôle",
      duration: "20 min",
      status: "pending"
    },
    {
      id: "4",
      time: "15:30",
      patient: "Fatima Mbadinga",
      type: "Téléconsultation",
      duration: "25 min",
      status: "confirmed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-800';
      case 'monitoring': return 'bg-yellow-100 text-yellow-800';
      case 'recovery': return 'bg-blue-100 text-blue-800';
      case 'critical': return 'bg-red-100 text-red-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'stable': return 'Stable';
      case 'monitoring': return 'Surveillance';
      case 'recovery': return 'Récupération';
      case 'critical': return 'Critique';
      case 'confirmed': return 'Confirmé';
      case 'pending': return 'En attente';
      default: return status;
    }
  };

  const filteredPatients = recentPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Espace Médecin</h1>
                <p className="text-sm text-gray-600">Bienvenue, {doctorData.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-medical-green text-white">
                {doctorData.specialty}
              </Badge>
              <Button variant="ghost" size="sm">
                <BellIcon className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{todayStats.totalPatients}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                  <CalendarDaysIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">RDV Aujourd'hui</p>
                  <p className="text-2xl font-bold text-gray-900">{todayStats.todayAppointments}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-orange rounded-full flex items-center justify-center">
                  <DocumentTextIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Résultats Pendants</p>
                  <p className="text-2xl font-bold text-gray-900">{todayStats.pendingResults}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Urgences</p>
                  <p className="text-2xl font-bold text-gray-900">{todayStats.emergencies}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="appointments">Planning</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Patients Tab */}
          <TabsContent value="patients">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Gestion des Patients</CardTitle>
                  <Button className="bg-medical-green hover:bg-green-700">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Nouveau Patient
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher un patient..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filteredPatients.map((patient) => (
                    <div 
                      key={patient.id} 
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedPatient(patient.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={patient.avatar} />
                            <AvatarFallback>
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{patient.name}</h3>
                            <p className="text-sm text-gray-600">{patient.age} ans • {patient.condition}</p>
                            <p className="text-sm text-gray-500">Dernière visite: {patient.lastVisit}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(patient.status)}>
                          {getStatusLabel(patient.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Planning du Jour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                            <ClockIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{appointment.time} - {appointment.patient}</h3>
                            <p className="text-sm text-gray-600">{appointment.type} • {appointment.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(appointment.status)}>
                            {getStatusLabel(appointment.status)}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistiques Mensuelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Consultations</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nouveaux patients</span>
                      <span className="font-semibold">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Téléconsultations</span>
                      <span className="font-semibold">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Taux de satisfaction</span>
                      <span className="font-semibold">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Répartition des Pathologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hypertension</span>
                      <span className="font-semibold">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Diabète</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cardiologie</span>
                      <span className="font-semibold">22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Autres</span>
                      <span className="font-semibold">16%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du Cabinet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Informations Personnelles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nom complet</label>
                        <Input value={doctorData.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Spécialité</label>
                        <Input value={doctorData.specialty} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input value={doctorData.email} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Numéro de licence</label>
                        <Input value={doctorData.license} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Horaires de Consultation</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="text-gray-600">08:00 - 17:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Samedi</span>
                        <span className="text-gray-600">08:00 - 12:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Dimanche</span>
                        <span className="text-gray-600">Fermé</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-medical-green hover:bg-green-700">
                      Sauvegarder
                    </Button>
                    <Button variant="outline">
                      Annuler
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}