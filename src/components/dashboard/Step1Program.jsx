import React, { useState } from "react";

const Step1Program = ({ nextStep }) => {

  const programs = {
    seedlift: {
      title: "SeedLift",
      description: "Programme early-stage pour transformer une idée en MVP avec mentorat intensif."
    },
    fikralaunch: {
      title: "FikraLaunch",
      description: "Programme innovation et prototypes pour Agri, Green business et Tech."
    },
    congoaccelerator: {
      title: "Congo Founder Accelerator",
      description: "Programme avec accès investisseurs et participation au Startup Pitch Forum."
    }
  };

  const [selected, setSelected] = useState("");

  return (
    <div>

      <h3 className="text-xl font-semibold mb-4">
        Étape 1 : Choisir un programme
      </h3>

      <select
        className="border p-3 rounded w-full mb-4"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Sélectionnez un programme</option>
        <option value="seedlift">SeedLift</option>
        <option value="fikralaunch">FikraLaunch</option>
        <option value="congoaccelerator">Congo Founder Accelerator</option>
      </select>

      {selected && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h4 className="font-bold">{programs[selected].title}</h4>
          <p>{programs[selected].description}</p>
        </div>
      )}

      <button
        disabled={!selected}
        onClick={nextStep}
        className="bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-400"
      >
        Suivant
      </button>

    </div>
  );
};

export default Step1Program;
