import React from "react";

const InvestorStartupCard = ({ startup }) => {
  return (
    <div className="border rounded p-4 shadow hover:bg-gray-100 cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
      <p>Programme : {startup.programme}</p>
      <p>Secteur : {startup.sector}</p>
      <p>Statut candidature : {startup.status}</p>
      <p>MVP soumis : {startup.mvpSubmitted ? "Oui" : "Non"}</p>
      <p>Progression : {startup.progress}%</p>

      {/* Actions rapides */}
      <div className="mt-2 flex flex-col gap-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Voir profil
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Voir pitch deck / MVP
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
          Proposer jumelage / investissement
        </button>
        <button className="bg-gray-500 text-white px-3 py-1 rounded">
          Envoyer message
        </button>
      </div>
    </div>
  );
};

export default InvestorStartupCard;
