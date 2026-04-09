import React, { useState } from "react";

const InvestorRequestDocumentsForm = ({ startups, onSubmit }) => {
  const [selectedStartup, setSelectedStartup] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedStartup, documentType, message });
    setSelectedStartup("");
    setDocumentType("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Demande Document / Pitch Deck</h3>

      <label className="block mb-2">Startup ciblée</label>
      <select
        className="w-full mb-4 p-2 border rounded"
        value={selectedStartup}
        onChange={(e) => setSelectedStartup(e.target.value)}
        required
      >
        <option value="">Sélectionner une startup</option>
        {startups.map((s, idx) => (
          <option key={idx} value={s.id}>{s.name}</option>
        ))}
      </select>

      <label className="block mb-2">Type de document</label>
      <select
        className="w-full mb-4 p-2 border rounded"
        value={documentType}
        onChange={(e) => setDocumentType(e.target.value)}
        required
      >
        <option value="">Sélectionner le type</option>
        <option value="Pitch Deck">Pitch Deck PDF</option>
        <option value="Video MVP">Vidéo MVP</option>
        <option value="Autres">Autres documents</option>
      </select>

      <label className="block mb-2">Message / Instructions</label>
      <textarea
        className="w-full mb-4 p-2 border rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message optionnel"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Envoyer demande
      </button>
    </form>
  );
};

export default InvestorRequestDocumentsForm;
