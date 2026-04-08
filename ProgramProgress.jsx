import React from "react";

const ProgramProgress = ({ modules }) => {
  // Calcul du % complété
  const total = modules.length;
  const completed = modules.filter(m => m.statut === "Complété").length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="p-4 border rounded shadow mb-4">
      <h3 className="font-semibold mb-2">Progression du programme</h3>
      <div className="w-full bg-gray-200 h-4 rounded mb-2">
        <div
          className="bg-green-500 h-4 rounded transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{completed} / {total} modules complétés ({percentage}%)</p>
    </div>
  );
};

export default ProgramProgress;
