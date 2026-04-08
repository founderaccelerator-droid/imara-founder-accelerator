import React from "react";

const Step4Documents = ({ nextStep, prevStep }) => {

  return (
    <div>

      <h3 className="text-xl font-semibold mb-4">
        Étape 4 : Documents et MVP
      </h3>

      <label className="block mb-2 font-medium">
        Upload Pitch Deck (PDF)
      </label>

      <input
        type="file"
        accept=".pdf"
        className="border p-3 rounded w-full mb-4"
      />

      <label className="block mb-2 font-medium">
        Upload Vidéo démo (max 3 minutes / 100MB)
      </label>

      <input
        type="file"
        accept="video/mp4,video/mov"
        className="border p-3 rounded w-full mb-4"
      />

      <label className="block mb-2 font-medium">
        Autres documents (optionnel)
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
          onClick={nextStep}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Suivant
        </button>

      </div>

    </div>
  );
};

export default Step4Documents;
