// components/admin/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Patients', path: '/admin/patients' },
  { name: 'Médecins', path: '/admin/medecins' },
  { name: 'Documents', path: '/admin/documents' },
  { name: 'Rendez-vous', path: '/admin/rdvs' },
  { name: 'Paramètres', path: '/admin/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h1 className="text-lg font-bold mb-6">Mon Dossier Médical</h1>
      <nav className="space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`block px-4 py-2 rounded ${
              pathname === link.path ? 'bg-blue-100 text-blue-800 font-semibold' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
