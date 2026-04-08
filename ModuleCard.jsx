import React from "react";

const ModuleCard = ({ module }) => {
  // module: { id, nom, type, statut, progression, url }
  
  const getProgressColor = (statut) => {
    switch(statut) {
      case "Non commencé": return "bg-gray-300";
      case "En cours": return "bg-yellow-400";
      case "Complété": return "bg-green-500";
      default: return "bg-gray-300";
    }
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition relative">
      <h4 className="font-semibold mb-1">{module.nom}</h4>
      <p className="text-sm mb-2">Type : {module.type}</p>
      <p className="text-sm mb-2">Statut : {module.statut}</p>

      <div className="w-full bg-gray-200 h-2 rounded mb-2">
        <div
          className={`${getProgressColor(module.statut)} h-2 rounded`}
          style={{ width: `${module.progression}%` }}
        ></div>
      </div>

      {module.statut === "Sélectionnée" || module.statut === "En cours" ? (
        <a
          href={module.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Accéder
        </a>
      ) : (
        <button
          disabled
          className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed"
        >
          Accès bloqué
        </button>
      )}
    </div>
  );
};

export default ModuleCard;
