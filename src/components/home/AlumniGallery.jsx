import React from "react";

const alumniData = [
  { name: "Startup Alpha", image: "https://via.placeholder.com/100" },
  { name: "Startup Beta", image: "https://via.placeholder.com/100" },
  { name: "Startup Gamma", image: "https://via.placeholder.com/100" },
  { name: "Startup Delta", image: "https://via.placeholder.com/100" },
  { name: "Startup Epsilon", image: "https://via.placeholder.com/100" },
];

const AlumniGallery = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Alumni</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {alumniData.map((alumni, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-24 h-24 rounded-full mb-2 shadow hover:shadow-lg transition cursor-pointer"
            />
            <p className="font-semibold">{alumni.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.location.href="/alumni"}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Rejoindre la communauté Alumni
      </button>
    </section>
  );
};

export default AlumniGallery;
