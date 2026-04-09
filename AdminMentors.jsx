import React, { useState } from "react";

const sampleMentors = [
  { id: 1, nom: "Alice N.", email: "alice@example.com", startups: "SeedLift", role: "Tech Mentor" },
  { id: 2, nom: "Bob K.", email: "bob@example.com", startups: "FikraLaunch", role: "Agri Mentor" }
];

const AdminMentors = () => {
  const [mentors, setMentors] = useState(sampleMentors);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Mentors</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Startups assignées</th>
            <th className="p-2 border">Rôle</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((m) => (
            <tr key={m.id}>
              <td className="p-2 border">{m.nom}</td>
              <td className="p-2 border">{m.email}</td>
              <td className="p-2 border">{m.startups}</td>
              <td className="p-2 border">{m.role}</td>
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

export default AdminMentors;
