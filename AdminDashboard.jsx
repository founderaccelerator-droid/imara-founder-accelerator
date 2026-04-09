import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Administrateur</h1>

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Candidatures reçues</h2>
          <p className="text-2xl">120</p>
        </div>
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Startups actives</h2>
          <p className="text-2xl">35</p>
        </div>
        <div className="border rounded p-4 shadow">
          <h2 className="font-semibold">Mentors actifs</h2>
          <p className="text-2xl">12</p>
        </div>
      </div>

      {/* Navigation modules du dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Candidatures",
          "Programmes",
          "Mentors",
          "Investisseurs",
          "Alumni",
          "Contenus",
          "Reporting",
          "Notifications"
        ].map((section, idx) => (
          <div key={idx} className="border rounded p-4 shadow hover:bg-gray-100 cursor-pointer">
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
