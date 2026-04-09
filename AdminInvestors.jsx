import React, { useState } from "react";

const sampleInvestors = [
  { id: 1, nom: "Charles L.", email: "charles@example.com", startups: "SeedLift", access: "Pitch Deck" },
  { id: 2, nom: "Diana M.", email: "diana@example.com", startups: "Congo Founder Accelerator", access: "MVP + Pitch" }
];

const AdminInvestors = () => {
  const [investors, setInvestors] = useState(sampleInvestors);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Investisseurs</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Startups suivies</th>
            <th className="p-2 border">Accès</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((i) => (
            <tr key={i.id}>
              <td className="p-2 border">{i.nom}</td>
              <td className="p-2 border">{i.email}</td>
              <td className="p-2 border">{i.startups}</td>
              <td className="p-2 border">{i.access}</td>
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

export default AdminInvestors;
