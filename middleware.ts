import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    return new Response("Non connecté", { status: 401 });
  }

  const role = sessionClaims?.publicMetadata?.role;
  const path = req.nextUrl.pathname;

  if (path.startsWith('/admin') && role !== 'admin') {
    return new Response("Accès interdit à l'espace admin", { status: 403 });
  }

  if (path.startsWith('/doctor') && role !== 'doctor') {
    return new Response("Accès interdit à l'espace médecin", { status: 403 });
  }

  if (path.startsWith('/patient') && role !== 'patient') {
    return new Response("Accès interdit à l'espace patient", { status: 403 });
  }

  // L'utilisateur a le bon rôle, on continue normalement
});

export const config = {
  matcher: ['/admin(.*)', '/doctor(.*)', '/patient(.*)'],
};
