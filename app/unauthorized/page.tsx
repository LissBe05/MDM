// app/unauthorized/page.tsx
export default function UnauthorizedPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-semibold text-red-600">Accès refusé</h1>
          <p className="mt-2 text-gray-600">Vous n'avez pas les droits pour accéder à cette page.</p>
        </div>
      </div>
    );
  }
  