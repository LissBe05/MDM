import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

const adminNavItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/patients', label: 'Patients' },
  { href: '/admin/doctors', label: 'Médecins' },
  { href: '/admin/appointments', label: 'Rendez-vous' },
  { href: '/admin/documents', label: 'Documents' },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const user = await currentUser();

  if (!user || user.publicMetadata.role !== 'admin') {
    return redirect('/'); // Ou '/access-denied'
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Mon Dossier Médical</h1>
        <nav className="space-y-2">
          {adminNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="block hover:bg-blue-700 px-4 py-2 rounded">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
          <form action="/sign-out" method="post">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 flex items-center"
              type="submit"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1" />
              Déconnexion
            </Button>
          </form>
        </header>

        {/* Page content */}
        <main className="p-6 bg-gray-50 flex-1">{children}</main>
      </div>
    </div>
  );
}
