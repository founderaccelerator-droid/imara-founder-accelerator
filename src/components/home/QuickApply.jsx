import React from "react";
import { useNavigate } from "react-router-dom";

const QuickApply = ({ user }) => {
  const navigate = useNavigate();

  const handleParticipantClick = () => {
    // Vérifier si utilisateur connecté
    if (user?.isLoggedIn) {
      navigate("/candidature-participant");
    } else {
      navigate("/login?redirect=/candidature-participant");
    }
  };

  const handleMentorClick = () => {
    if (user?.isLoggedIn) {
      navigate("/candidature-mentor");
    } else {
      navigate("/login?redirect=/candidature-mentor");
    }
  };

  return (
    <section className="py-16 px-4 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Rejoignez le programme dès aujourd’hui
      </h2>
      <p className="mb-8">Frais 20 $ / équivalent réseau mobile</p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={handleParticipantClick}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Postuler maintenant
        </button>

        <button
          onClick={handleMentorClick}
          className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
        >
          Devenir mentor
        </button>
      </div>
    </section>
  );
};

export default QuickApply;
