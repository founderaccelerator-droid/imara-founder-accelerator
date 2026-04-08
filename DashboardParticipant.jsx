import React, { useState, useEffect } from "react";
import ParticipantModuleCard from "./ParticipantModuleCard";

const DashboardParticipant = ({ participantData, candidatures, modules }) => {
  const [selectedModules, setSelectedModules] = useState([]);

  useEffect(() => {
    // Filtrer les modules accessibles uniquement si la candidature est sélectionnée
    const accessibles = modules.filter(mod => mod.programSelected && mod.accessible);
    setSelectedModules(accessibles);
  }, [modules]);

  return (
    <div className="p-4">
      {/* Section Bienvenue */}
      <h2 className="text-2xl font-bold mb-4">
        Bienvenue, {participantData.name}
      </h2>

      {/* Section Candidatures */}
      <h3 className="text-xl font-semibold mb-2">Mes candidatures</h3>
      <div className="grid gap-4 mb-6">
        {candidatures.map(c => (
          <div key={c.id} className="p-4 border rounded shadow">
            <p>Programme : {c.program}</p>
            <p>Statut : {c.status}</p>
            {c.status !== "Confirmée" && (
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                Modifier candidature
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Section Modules */}
      <h3 className="text-xl font-semibold mb-2">Mes modules</h3>
      <div className="grid gap-4">
        {selectedModules.length === 0 ? (
          <p>Aucun module disponible pour le moment.</p>
        ) : (
          selectedModules.map(mod => (
            <ParticipantModuleCard key={mod.id} module={mod} />
          ))
        )}
      </div>
    </div>
  );
};
import React, { useState, useEffect } from "react";
import ParticipantModuleCard from "./ParticipantModuleCard";

const DashboardParticipant = ({ participantData, candidatures, modules }) => {
  const [selectedModules, setSelectedModules] = useState([]);

  useEffect(() => {
    // Filtrer les modules accessibles uniquement si la candidature est confirmée
    const accessibles = modules.filter(
      mod => mod.programSelected && mod.accessible
    );
    setSelectedModules(accessibles);
  }, [modules]);

  return (
    <div className="p-4">
      {/* Bienvenue */}
      <h2 className="text-2xl font-bold mb-4">
        Bienvenue, {participantData.name}
      </h2>

      {/* Section Candidatures */}
      <h3 className="text-xl font-semibold mb-2">Mes candidatures</h3>
      <div className="grid gap-4 mb-6">
        {candidatures.map(c => (
          <div key={c.id} className="p-4 border rounded shadow">
            <p>Programme : {c.program}</p>
            <p>Statut : {c.status}</p>
            {c.status !== "Confirmée" && (
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                Modifier candidature
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Section Modules */}
      <h3 className="text-xl font-semibold mb-2">Mes modules</h3>
      <div className="grid gap-4">
        {selectedModules.length === 0 ? (
          <p>Aucun module disponible pour le moment.</p>
        ) : (
          selectedModules.map(mod => (
            <ParticipantModuleCard key={mod.id} module={mod} />
          ))
        )}
      </div>
    </div>
  );
};
import ParticipantModuleCard from "./ParticipantModuleCard";
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {modules.map((module, idx) => (
    <ParticipantModuleCard key={idx} module={module} />
  ))}
</div>
import ParticipantModuleCard from "./ParticipantModuleCard";

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {modules.map((module, idx) => (
    <ParticipantModuleCard key={idx} module={{
      ...module,
      accessible: module.accessible && checkModuleSchedule(module), // Vérifie les horaires
      participantSelected: currentUser.selected // Vérifie si le participant est sélectionné
    }} />
  ))}
</div>
export default DashboardParticipant;
