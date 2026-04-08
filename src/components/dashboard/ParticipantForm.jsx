import React, { useState } from "react";

import Step1Program from "./Step1Program";
import Step2Project from "./Step2Project";
import Step3Team from "./Step3Team";
import Step4Documents from "./Step4Documents";
import Step5Payment from "./Step5Payment";

const ParticipantForm = () => {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">

      <h2 className="text-3xl font-bold mb-6">
        Nouvelle candidature
      </h2>

      {/* Barre de progression */}

      <div className="flex mb-8">

        {[1,2,3,4,5].map((s) => (

          <div
            key={s}
            className={`flex-1 h-2 mx-1 rounded ${
              s <= step ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>

        ))}

      </div>

      {/* Affichage des étapes */}

      {step === 1 && <Step1Program nextStep={nextStep} />}

      {step === 2 && (
        <Step2Project
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <Step3Team
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <Step4Documents
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 5 && (
        <Step5Payment
          prevStep={prevStep}
        />
      )}

    </div>
  );
};

export default ParticipantForm;
const handleSubmit = async () => {
  // Vérifier paiement et consentement RGPD
  if (!consentRGPD || !paymentConfirmed) {
    alert("Veuillez confirmer paiement et RGPD");
    return;
  }

  // Soumettre la candidature
  await submitCandidature({
    program,
    projectInfo,
    team,
    documents,
    paymentInfo,
    status: "submitted", // verrouille la candidature
  });

  // Redirection vers Dashboard Participant
  navigate("/dashboard-participant");
};
