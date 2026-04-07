import React from "react";

const QuickApply = () => {
  return (
    <section className="py-16 px-4 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Rejoignez le programme dès aujourd’hui</h2>
      <p className="mb-8">Frais 20 $ / équivalent réseau mobile.</p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={() => window.location.href="/candidature-participant"}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Postulez comme participant
        </button>
        <button
          onClick={() => window.location.href="/candidature-mentor"}
          className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
        >
          Devenir mentor bénévole
        </button>
      </div>
    </section>
  );
};

export default QuickApply;
