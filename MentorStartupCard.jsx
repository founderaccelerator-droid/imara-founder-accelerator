import React from "react";

const MentorStartupCard = ({ startup }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h4 className="font-semibold">{startup.name}</h4>
      <p>Statut : {startup.status}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Voir détails
      </button>
      <button className="mt-2 ml-2 bg-green-500 text-white px-3 py-1 rounded">
        Donner feedback
      </button>
    </div>
  );
};

export default MentorStartupCard;
