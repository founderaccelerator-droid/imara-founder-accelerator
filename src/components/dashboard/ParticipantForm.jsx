import React, { useState } from "react";

const ParticipantForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Nouvelle candidature</h2>

      {/* Barre de progression */}
      <div className="flex mb-8">
        {[1,2,3,4,5].map(s => (
          <div key={s} className={`flex-1 h-2 mx-1 rounded ${s <= step ? "bg-blue-600" : "bg-gray-300"}`}></div>
        ))}
      </div>

      {/* Formulaire étape par étape */}
      {step === 1 && <div>Étape 1 : Choix du programme</div>}
      {step === 2 && <div>Étape 2 : Informations sur le projet</div>}
      {step === 3 && <div>Étape 3 : Équipe</div>}
      {step === 4 && <div>Étape 4 : Documents / MVP</div>}
      {step === 5 && <div>Étape 5 : Paiement mobile + consentement</div>}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400 transition">
          Précédent
        </button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          {step < 5 ? "Suivant" : "Soumettre la candidature"}
        </button>
      </div>
    </div>
  );
};

export default ParticipantForm;
