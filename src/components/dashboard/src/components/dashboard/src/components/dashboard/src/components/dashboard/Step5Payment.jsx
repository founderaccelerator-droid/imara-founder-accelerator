import React, { useState } from "react";

const Step5Payment = ({ prevStep }) => {

  const [paymentProof, setPaymentProof] = useState(null);
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeCommitment, setAgreeCommitment] = useState(false);
  const [confirmPayment, setConfirmPayment] = useState(false);

  const canSubmit =
    paymentProof && agreePolicy && agreeCommitment && confirmPayment;

  const handleSubmit = () => {
    alert("Candidature soumise avec succès !");
  };

  return (
    <div>

      <h3 className="text-xl font-semibold mb-4">
        Étape 5 : Paiement et validation
      </h3>

      <div className="bg-gray-100 p-4 rounded mb-6">

        <p className="mb-2 font-medium">
          Frais de candidature : 20 USD
        </p>

        <p>Payer via :</p>

        <ul className="list-disc ml-6">
          <li>M-Pesa</li>
          <li>Orange Money</li>
          <li>Airtel Money</li>
        </ul>

      </div>

      <label className="block mb-2 font-medium">
        Upload preuve de paiement
      </label>

      <input
        type="file"
        onChange={(e) => setPaymentProof(e.target.files[0])}
        className="border p-3 rounded w-full mb-6"
      />

      <div className="mb-3">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            onChange={(e) => setAgreeCommitment(e.target.checked)}
          />

          Je certifie que toutes les informations fournies sont exactes.

        </label>

      </div>

      <div className="mb-3">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            onChange={(e) => setAgreePolicy(e.target.checked)}
          />

          J’accepte la politique de confidentialité et les conditions du programme.

        </label>

      </div>

      <div className="mb-6">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            onChange={(e) => setConfirmPayment(e.target.checked)}
          />

          Je confirme avoir effectué le paiement.

        </label>

      </div>

      <div className="flex justify-between">

        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Précédent
        </button>

        <button
          disabled={!canSubmit}
          onClick={handleSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded disabled:bg-gray-300"
        >
          Soumettre la candidature
        </button>

      </div>

    </div>
  );
};

export default Step5Payment;
