import React, { useState } from "react";

const sampleCandidatures = [
  {
    id: 1,
    startup: "AgriTech",
    programme: "SeedLift",
    equipe: "John Doe, Jane Doe",
    email: "contact@agritech.com",
    statut: "En cours",
    paiement: "Mobile non vérifié"
  },
  {
    id: 2,
    startup: "GreenInnov",
    programme: "FikraLaunch",
    equipe: "Ali K., Sara L.",
    email: "info@greeninnov.com",
    statut: "Pré-sélectionnée",
    paiement: "Mobile vérifié"
  }
];

const AdminCandidatures = () => {
  const [candidatures, setCandidatures] = useState(sampleCandidatures);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Candidatures</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Startup / Projet</th>
            <th className="p-2 border">Programme</th>
            <th className="p-2 border">Équipe</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Statut</th>
            <th className="p-2 border">Paiement</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidatures.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.startup}</td>
              <td className="p-2 border">{c.programme}</td>
              <td className="p-2 border">{c.equipe}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.statut}</td>
              <td className="p-2 border">{c.paiement}</td>
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

export default AdminCandidatures;
