import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function PatientLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== 'patient') {
    redirect('/'); // ou afficher une page "Accès refusé"
  }

  return <>{children}</>;
}
