import React, { useState } from "react";

const sampleProgrammes = [
  {
    id: 1,
    nom: "SeedLift",
    description: "Programme early-stage avec mentorat intensif",
    secteur: "Tech / Agri",
    duree: "3 mois",
    maxParticipants: 20
  },
  {
    id: 2,
    nom: "FikraLaunch",
    description: "Prototype & innovation, Agri, Green Business",
    secteur: "Agri / Green",
    duree: "4 mois",
    maxParticipants: 15
  }
];

const AdminProgrammes = () => {
  const [programmes, setProgrammes] = useState(sampleProgrammes);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Programmes</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Secteur</th>
            <th className="p-2 border">Durée</th>
            <th className="p-2 border">Max Participants</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {programmes.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.nom}</td>
              <td className="p-2 border">{p.description}</td>
              <td className="p-2 border">{p.secteur}</td>
              <td className="p-2 border">{p.duree}</td>
              <td className="p-2 border">{p.maxParticipants}</td>
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

export default AdminProgrammes;
