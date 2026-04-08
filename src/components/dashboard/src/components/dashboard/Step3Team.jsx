import React, { useState } from "react";

const Step3Team = ({ nextStep, prevStep }) => {

  const [founderName, setFounderName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = founderName && role && email && phone;

  return (
    <div>

      <h3 className="text-xl font-semibold mb-4">
        Étape 3 : Équipe fondatrice
      </h3>

      <input
        type="text"
        placeholder="Nom complet du fondateur"
        className="border p-3 rounded w-full mb-4"
        value={founderName}
        onChange={(e) => setFounderName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Rôle dans l’équipe"
        className="border p-3 rounded w-full mb-4"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 rounded w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Téléphone"
        className="border p-3 rounded w-full mb-4"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className="block mb-2 font-medium">
        Upload CV du fondateur
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

export default Step3Team;
