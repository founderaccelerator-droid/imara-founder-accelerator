import React from "react";

const AlumniList = ({ alumni }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {alumni.map((alum, idx) => (
        <div
          key={idx}
          className="border rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
        >
          <img
            src={alum.photoUrl}
            alt={alum.name}
            className="w-24 h-24 rounded-full mb-2 object-cover"
          />
          <h3 className="font-semibold text-lg">{alum.name}</h3>
          <p className="text-gray-600">{alum.program}</p>
          <button
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => window.alert(`Voir le profil de ${alum.name}`)}
          >
            Voir profil
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlumniList;
