import React from "react";

const MentorModuleCard = ({ module }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h4 className="font-semibold">{module.title}</h4>
      <p>{module.description}</p>
      <p>Status: {module.statut}</p>
    </div>
  );
};

export default MentorModuleCard;
