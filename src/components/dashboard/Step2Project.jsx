import React, { useState } from "react";

const Step2Project = ({ nextStep, prevStep }) => {

  const [projectName, setProjectName] = useState("");
  const [sector, setSector] = useState("");
  const [type, setType] = useState("");
  const [website, setWebsite] = useState("");

  const isValid = projectName && sector && type;

  return (
    <div>

      <h3 className="text-xl font-semibold mb-4">
        Étape 2 : Informations sur le projet
      </h3>

      <input
        type="text"
        placeholder="Nom du projet / startup"
        className="border p-3 rounded w-full mb-4"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <select
        className="border p-3 rounded w-full mb-4"
        value={sector}
        onChange={(e) => setSector(e.target.value)}
      >
        <option value="">Choisir le secteur</option>
        <option value="agri">Agri</option>
        <option value="green">Green Business</option>
        <option value="tech">Tech</option>
        <option value="innovation">Innovation</option>
      </select>

      <select
        className="border p-3 rounded w-full mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Type de projet</option>
        <option value="idea">Idea</option>
        <option value="prototype">Prototype</option>
        <option value="mvp">MVP</option>
      </select>

      <input
        type="text"
        placeholder="Site web (optionnel)"
        className="border p-3 rounded w-full mb-4"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <label className="block mb-2 font-medium">
        Upload logo ou image du projet
      </label>

      <input
        type="file"
        className="border p-3 rounded w-full mb-6"
      />

      <div className="flex justify-between">

        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Précédent
        </button>

        <button
          disabled={!isValid}
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded disabled:bg-gray-300"
        >
          Suivant
        </button>

      </div>

    </div>
  );
};

export default Step2Project;
