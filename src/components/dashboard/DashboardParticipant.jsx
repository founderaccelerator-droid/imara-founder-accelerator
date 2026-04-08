import React from "react";

// Exemple de données : à remplacer par l'API réelle
const exampleCandidatures = [
  {
    program: "SeedLift",
    status: "draft",
    canEdit: true,
    modulesCompleted: 0,
  },
  {
    program: "FikraLaunch",
    status: "submitted",
    canEdit: false,
    modulesCompleted: 2,
  },
];

const DashboardParticipant = () => {

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">

      <h2 className="text-3xl font-bold mb-6">Bienvenue, [Nom Participant]</h2>

      <p className="mb-6 text-gray-700">
        Voici vos candidatures et votre progression dans le programme.
      </p>

      {exampleCandidatures.map((c, idx) => (
        <div key={idx} className="bg-white shadow rounded p-6 mb-4">
          <h3 className="text-xl font-semibold mb-2">{c.program}</h3>
          <p className="mb-2">
            Statut : <span className="font-medium">{c.status === "draft" ? "Brouillon" : "Soumise"}</span>
          </p>
          <p className="mb-2">
            Modules complétés : {c.modulesCompleted} / [Total Modules]
          </p>

          <div className="flex gap-3 mt-4">
            {c.canEdit ? (
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Modifier candidature
              </button>
            ) : (
              <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                Candidature verrouillée
              </button>
            )}

            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Voir modules
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default DashboardParticipant;
