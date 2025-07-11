// app/admin/patients/[id]/page.tsx
'use client';

export default function PatientDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Dossier du patient #{params.id}</h2>
      <p className="mt-2 text-gray-500">Édition des informations à venir…</p>
    </div>
  );
}
