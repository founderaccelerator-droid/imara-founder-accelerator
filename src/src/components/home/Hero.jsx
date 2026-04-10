import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ user }) => {
  const navigate = useNavigate();navigate = useNavigate();

  const handleParticipantClick = () => {const handleParticipantClick = () => {
    si (utilisateur?.estConnecté) {if (user?.isLoggedIn) {
      naviguer("/candidature-participant");navigate("/candidature-participant");
    } autre {} else {
      naviguer("/login?redirect=/candidature-participant");navigate("/login?redirect=/candidature-participant");
    }}
  };};

  const handleMentorClick = () => {const handleMentorClick = () => {
    si (utilisateur?.estConnecté) {if (user?.isLoggedIn) {
      naviguer("/mentor-candidature");navigate("/candidature-mentor");
    } autre {} else {
      naviguer("/login?redirect=/candidature-mentor");navigate("/login?redirect=/candidature-mentor");
    }}
  };};

  retour (return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4"><section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4"><h1 className="text-4xl md:text-6xl font-bold mb-4">
        Former les leaders de demain
      </h1></h1>
      <p className="text-lg md:text-2xl mb-8"><p className="text-lg md:text-2xl mb-8">
        L'incubateur qui transforme vos idées en startups louables et connectées aux investisseurs.
      </p></p>

      <div className="flex flex-col md:flex-row gap-4"><div className="flex flex-col md:flex-row gap-4">
        < bouton<button
          onClick={handleParticipantClick}onClick={handleParticipantClick}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >>
          Postuler maintenant
        </button></button>

        < bouton<button
          onClick={handleMentorClick}onClick={handleMentorClick}
          className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
        >>
          Mentor de Devenir
        </button></button>
      </div></div>
    </section></section>
  ););
};;

exporter par défaut Héros ; default Hero;
