import React, { useState } from "react";

const sampleAlumni = [
  { id: 1, nom: "Jean P.", email: "jean@example.com", programme: "SeedLift", annee: 2024 },
  { id: 2, nom: "Amina K.", email: "amina@example.com", programme: "FikraLaunch", annee: 2023 }
];

const AdminAlumni = () => {
  const [alumni, setAlumni] = useState(sampleAlumni);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Alumni</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Programme suivi</th>
            <th className="p-2 border">Année de sortie</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {alumni.map((a) => (
            <tr key={a.id}>
              <td className="p-2 border">{a.nom}</td>
              <td className="p-2 border">{a.email}</td>
              <td className="p-2 border">{a.programme}</td>
              <td className="p-2 border">{a.annee}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Modifier
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAlumni;
