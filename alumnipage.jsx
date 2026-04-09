import React, { useState, useEffect } from "react";
import AlumniList from "./AlumniList";

const AlumniPage = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    // Simuler fetch depuis API / backend
    const fetchAlumni = async () => {
      // Ici tu remplaceras par un appel réel API
      const data = [
        { name: "Alice Ndungu", program: "SeedLift", photoUrl: "/images/alice.jpg" },
        { name: "Jean Mukasa", program: "FikraLaunch", photoUrl: "/images/jean.jpg" },
        { name: "Fatou Diop", program: "Congo Founder Accelerator", photoUrl: "/images/fatou.jpg" },
      ];
      setAlumni(data);
    };
    fetchAlumni();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Communauté Alumni</h1>
      <p className="mb-6 text-gray-700">
        Découvrez nos alumni, connectez-vous avec eux et accédez à leurs profils.
      </p>
      <AlumniList alumni={alumni} />

      <div className="mt-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => window.alert("Rejoindre la communauté Alumni")}
        >
          Rejoindre la communauté Alumni
        </button>
      </div>
    </div>
  );
};

export default AlumniPage;
