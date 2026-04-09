import React, { useState } from "react";

const sampleContents = [
  { id: 1, type: "Module", title: "SeedLift - Module 1", file: "module1.pdf" },
  { id: 2, type: "Vidéo", title: "Pitch Forum 2024", file: "pitch.mp4" },
  { id: 3, type: "Photo", title: "Evénement Alumni", file: "event.jpg" },
  { id: 4, type: "Témoignage", title: "Jean P.", file: "testimonial.pdf" },
];

const AdminContents = () => {
  const [contents, setContents] = useState(sampleContents);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Contenus</h2>

      <table className="min-w-full border rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Titre</th>
            <th className="p-2 border">Fichier</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.type}</td>
              <td className="p-2 border">{c.title}</td>
              <td className="p-2 border">{c.file}</td>
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

export default AdminContents;
