import React from "react";

const MentorProgress = ({ modules }) => {
  const totalModules = modules.length;
  const completedModules = modules.filter(mod => mod.completed).length;
  const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Progression globale</h3>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="mt-1 text-sm">{completedModules} / {totalModules} modules complétés ({progressPercentage}%)</p>
    </div>
  );
};

export default MentorProgress;
