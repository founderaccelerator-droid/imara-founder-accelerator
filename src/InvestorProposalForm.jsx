import React, { useState } from "react";

const InvestorProposalForm = ({ startups, onSubmit }) => {
  const [selectedStartup, setSelectedStartup] = useState("");
  const [proposalType, setProposalType] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStartup || !proposalType) return;
    onSubmit({
      startup: selectedStartup,
      type: proposalType,
      amount,
      message,
      date: new Date(),
    });
    // reset form
    setSelectedStartup("");
    setProposalType("");
    setAmount("");
    setMessage("");
  };

  return (
    <form className="border rounded p-4 shadow" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold mb-4">Proposer un jumelage / investissement</h3>

      {/* Startup ciblée */}
      <label className="block mb-2">Startup ciblée</label>
      <select
        className="w-full border rounded p-2 mb-4"
        value={selectedStartup}
        onChange={(e) => setSelectedStartup(e.target.value)}
        required
      >
        <option value="">Sélectionner une startup</option>
        {startups.map((s, idx) => (
          <option key={idx} value={s.name}>
            {s.name} ({s.programme})
          </option>
        ))}
      </select>

      {/* Type de proposition */}
      <label className="block mb-2">Type de proposition</label>
      <select
        className="w-full border rounded p-2 mb-4"
        value={proposalType}
        onChange={(e) => setProposalType(e.target.value)}
        required
      >
        <option value="">Sélectionner le type</option>
        <option value="Financement">Financement</option>
        <option value="Partenariat stratégique">Partenariat stratégique</option>
        <option value="Mentorat sectoriel">Mentorat sectoriel</option>
      </select>

      {/* Montant proposé */}
      <label className="block mb-2">Montant proposé (optionnel)</label>
      <input
        type="number"
        className="w-full border rounded p-2 mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Ex. 5000"
      />

      {/* Message */}
      <label className="block mb-2">Message / conditions</label>
      <textarea
        className="w-full border rounded p-2 mb-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message ou conditions"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Envoyer proposition
      </button>
    </form>
  );
};

export default InvestorProposalForm;
