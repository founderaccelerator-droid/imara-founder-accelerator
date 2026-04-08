import React, { useState, useEffect } from "react";
import MentorStartupCard from "./MentorStartupCard";
import MentorModuleCard from "./MentorModuleCard";
import MentorProgress from "./MentorProgress";

const DashboardMentor = ({ mentorData, startups, modules }) => {
  return (
    <div className="p-4">
      {/* Section Bienvenue */}
      <h2 className="text-2xl font-bold mb-4">
        Bienvenue, {mentorData.name}
      </h2>

      {/* Statistiques rapides */}
      <div className="flex gap-4 mb-6">
        <div className="p-4 border rounded shadow flex-1">
          <p className="font-semibold">Startups suivies</p>
          <p>{startups.length}</p>
        </div>
        <div className="p-4 border rounded shadow flex-1">
          <p className="font-semibold">Sessions programmées</p>
          <p>{mentorData.sessions}</p>
        </div>
        <div className="p-4 border rounded shadow flex-1">
          <p className="font-semibold">Feedback en attente</p>
          <p>{mentorData.pendingFeedback}</p>
        </div>
      </div>

      {/* Progression Mentor */}
      <MentorProgress modules={modules} />

      {/* Section Startups assignées */}
      <h3 className="text-xl font-semibold mb-2">Startups assignées</h3>
      <div className="grid gap-4">
        {startups.map((startup) => (
          <MentorStartupCard key={startup.id} startup={startup} />
        ))}
      </div>

      {/* Section Modules Mentor */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Modules Mentor</h3>
      <div className="grid gap-4">
        {modules.map((mod) => (
          <MentorModuleCard key={mod.id} module={mod} />
        ))}
      </div>
    </div>
  );
};

export default DashboardMentor;
