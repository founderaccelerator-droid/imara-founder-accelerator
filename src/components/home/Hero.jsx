
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Empowering Tomorrow’s Leaders
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        L’incubateur qui transforme vos idées en startups rentables et connectées aux investisseurs.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => window.location.href="/candidature-participant"}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Postulez maintenant
        </button>
        <button
          onClick={() => window.location.href="/candidature-mentor"}
          className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
        >
          Devenir mentor
        </button>
      </div>
    </section>
  );
};

export default Hero;
