'use client';

import { React, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CalendarDaysIcon, 
  DocumentTextIcon, 
  HeartIcon, 
  BellIcon,
  UserIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function PatientDashboard() {
  const [selectedRdv, setSelectedRdv] = useState<string | null>(null);
  const router = useRouter();

  console.log("Patient dashboard loaded");

  const handleLogout = () => {
    toast.success('Déconnexion réussie');
    router.push('/');
  };

  const patientData = {
    name: "Jean Dupont",
    id: "PAT001",
    email: "jean.dupont@email.com",
    phone: "+241 06 12 34 56",
    dateOfBirth: "1985-03-15",
    bloodType: "A+",
    emergencyContact: "Marie Dupont - +241 07 65 43 21"
  };

  const quickActions = [
    {
      icon: CalendarDaysIcon,
      title: "Prendre RDV",
      description: "Réserver une consultation",
      color: "bg-medical-blue",
      action: () => toast.success("Redirection vers la prise de RDV")
    },
    {
      icon: DocumentTextIcon,
      title: "Mes Documents",
      description: "Ordonnances & résultats",
      color: "bg-medical-green",
      action: () => toast.success("Accès aux documents")
    },
    {
      icon: PhoneIcon,
      title: "Téléconsultation",
      description: "Consultation à distance",
      color: "bg-medical-orange",
      action: () => toast.success("Lancement téléconsultation")
    },
    {
      icon: HeartIcon,
      title: "Suivi Santé",
      description: "Graphiques & tendances",
      color: "bg-purple-600",
      action: () => toast.success("Affichage du suivi")
    }
  ];

  const upcomingAppointments = [
    {
      id: "1",
      doctor: "Dr. Marie Nguema",
      specialty: "Cardiologie",
      date: "2024-01-20",
      time: "14:30",
      type: "Consultation",
      status: "confirmed"
    },
    {
      id: "2",
      doctor: "Dr. Jean-Claude Mba",
      specialty: "Médecine générale",
      date: "2024-01-25",
      time: "10:00",
      type: "Suivi",
      status: "pending"
    }
  ];

  const medicalHistory = [
    {
      id: "1",
      date: "2024-01-10",
      type: "Consultation",
      doctor: "Dr. Pierre Obame",
      diagnosis: "Hypertension artérielle",
      treatment: "Médicament prescrit",
      status: "completed"
    },
    {
      id: "2",
      date: "2024-01-05",
      type: "Examen",
      doctor: "Dr. Sylvie Mayombo",
      diagnosis: "Bilan sanguin",
      treatment: "Résultats normaux",
      status: "completed"
    }
  ];

  const documents = [
    {
      id: "1",
      name: "Ordonnance - Dr. Nguema",
      type: "Ordonnance",
      date: "2024-01-15",
      size: "245 KB"
    },
    {
      id: "2",
      name: "Résultat - Bilan sanguin",
      type: "Résultat",
      date: "2024-01-10",
      size: "1.2 MB"
    },
    {
      id: "3",
      name: "Radio - Thorax",
      type: "Imagerie",
      date: "2024-01-08",
      size: "3.5 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Espace Patient</h1>
                <p className="text-sm text-gray-600">Bienvenue, {patientData.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
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
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={index}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={action.action}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
            <TabsTrigger value="appointments">Rendez-vous</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         {/* Patient Info */}
            <Link href="/patient/profile" className="block">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserIcon className="w-5 h-5 mr-2" />
                    Informations Patient
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ID Patient:</span>
                    <span className="font-semibold">{patientData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date de naissance:</span>
                    <span className="font-semibold">{patientData.dateOfBirth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Groupe sanguin:</span>
                    <span className="font-semibold">{patientData.bloodType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contact d'urgence:</span>
                    <span className="font-semibold text-sm">{patientData.emergencyContact}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>   

              {/* Next Appointment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarDaysIcon className="w-5 h-5 mr-2" />
                    Prochain RDV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{upcomingAppointments[0].doctor}</p>
                          <p className="text-sm text-gray-600">{upcomingAppointments[0].specialty}</p>
                        </div>
                        <Badge className={getStatusColor(upcomingAppointments[0].status)}>
                          {upcomingAppointments[0].status === 'confirmed' ? 'Confirmé' : 'En attente'}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {upcomingAppointments[0].date} à {upcomingAppointments[0].time}
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">Aucun rendez-vous programmé</p>
                  )}
                </CardContent>
              </Card>

              {/* Health Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeartIcon className="w-5 h-5 mr-2" />
                    État de Santé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Tension artérielle:</span>
                      <span className="font-semibold">120/80</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Dernière consultation:</span>
                      <span className="font-semibold">10 Jan 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Statut:</span>
                      <Badge className="bg-green-100 text-green-800">Stable</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Mes Rendez-vous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full ${appointment.status === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'} flex items-center justify-center`}>
                            {appointment.status === 'confirmed' ? (
                              <CheckCircleIcon className="w-6 h-6 text-green-600" />
                            ) : (
                              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            <p className="text-sm text-gray-500">{appointment.date} à {appointment.time}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historique Médical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record) => (
                    <div key={record.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{record.type}</Badge>
                          <span className="text-sm text-gray-600">{record.date}</span>
                        </div>
                        <Badge className={getStatusColor(record.status)}>
                          Terminé
                        </Badge>
                      </div>
                      <h3 className="font-semibold">{record.doctor}</h3>
                      <p className="text-sm text-gray-600 mb-1">{record.diagnosis}</p>
                      <p className="text-sm text-gray-500">{record.treatment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Mes Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <DocumentTextIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.name}</h3>
                          <p className="text-sm text-gray-600">{doc.type} • {doc.date}</p>
                          <p className="text-sm text-gray-500">{doc.size}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}