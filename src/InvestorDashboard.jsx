import React from "react";
import InvestorStartupCard from "./InvestorStartupCard";
import InvestorProposalForm from "./InvestorProposalForm";
import InvestorRequestForm from "./InvestorRequestForm";
import InvestorStartupDetail from "./InvestorStartupDetail";
import InvestorCalendar from "./InvestorCalendar";
import InvestorNotifications from "./InvestorNotifications";

// Exemple de données
const sampleStartups = [
  {
    name: "AgriTech Solutions",
    programme: "SeedLift",
    sector: "Agri",
    status: "Sélectionnée",
    mvpSubmitted: true,
    progress: 75,
  },
  {
    name: "Green Innovators",
    programme: "FikraLaunch",
    sector: "Green",
    status: "En cours",
    mvpSubmitted: false,
    progress: 40,
  },
];

const InvestorDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Investisseur</h1>

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Startups sélectionnées</h2>
          <p className="text-2xl">{sampleStartups.length}</p>
        </div>
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Pitchs soumis</h2>
          <p className="text-2xl">2</p>
        </div>
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Propositions envoyées</h2>
          <p className="text-2xl">1</p>
        </div>
      </div>

      {/* Liste startups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {sampleStartups.map((startup, idx) => (
          <InvestorStartupCard key={idx} startup={startup} />
        ))}
      </div>

      {/* Formulaires et calendrier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InvestorProposalForm />
        <InvestorRequestForm />
      </div>

      <div className="mt-6">
        <InvestorCalendar />
      </div>

      <div className="mt-6">
        <InvestorNotifications />
      </div>
    </div>
  );
};

export default InvestorDashboard;
