import React from "react";
import { useNavigate } from "react-router-dom";

const programsData = [
  {
    title: "SeedLift",
    description: "Programme early-stage pour lancer votre startup. Formation + mentorat + MVP.",
    link: "/candidature-participant",
    fee: "Payant",
  },
  {
    title: "FikraLaunch",
    description: "Pour les prototypes et innovations. Agriculture, green business et transformation.",
    link: "/candidature-participant",
    fee: "Payant",
  },
  {
    title: "Congo Founder Accelerator",
    description: "Capital d’amorçage, pitch aux investisseurs, Startup Pitch Forum.",
    link: "/candidature-participant",
    fee: "Gratuit",
  }
];

const Programs = ({ user }) => {
  const navigate = useNavigate();

  const handleApplyClick = (link) => {
    if (user?.isLoggedIn) {
      navigate(link);
    } else {
      navigate(`/login?redirect=${link}`);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Nos Programmes</h2>

      <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programsData.map((program) => (
          <div
            key={program.title}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="mb-4">{program.description}</p>
            <p className="mb-4 font-semibold">{program.fee}</p>
            <button
              onClick={() => handleApplyClick(program.link)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Postuler maintenant
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
