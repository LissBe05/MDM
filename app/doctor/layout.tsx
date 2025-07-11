import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DoctorLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== 'doctor') {
    redirect('/'); // Redirige vers l'accueil si l'utilisateur n'est pas médecin
  }

  return <>{children}</>;
}
