import React from "react";

const programsData = [
  {
    title: "SeedLift",
    description: "Early-stage, modules de formation, mentorat, MVP",
    link: "/program/seedlift"
  },
  {
    title: "FikraLaunch",
    description: "Prototypes, innovation, agriculture, agro-transformation, green business",
    link: "/program/fikralaunch"
  },
  {
    title: "Congo Founder Accelerator",
    description: "Capital d’amorçage, pitch investisseurs, Startup Pitch Forum",
    link: "/program/congofa"
  }
];

const Programs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Nos Programmes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {programsData.map((program) => (
          <div key={program.title} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
            <p className="mb-6">{program.description}</p>
            <button
              onClick={() => window.location.href=program.link}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
