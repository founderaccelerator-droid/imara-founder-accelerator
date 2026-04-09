import React from "react";
import { Bar, Pie } from "react-chartjs-2";

const AdminReporting = ({ data }) => {
  // Données exemple si non passées
  const sampleData = {
    candidatures: [12, 8, 15],
    programmes: ["SeedLift", "FikraLaunch", "Congo Founder Accelerator"],
    mentors: [5, 3, 7],
    investisseurs: [4, 2, 6],
  };

  const barData = {
    labels: data?.programmes || sampleData.programmes,
    datasets: [
      {
        label: "Candidatures",
        data: data?.candidatures || sampleData.candidatures,
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
      },
    ],
  };

  const pieData = {
    labels: ["Mentors actifs", "Investisseurs actifs"],
    datasets: [
      {
        data: [
          data?.mentors.reduce((a, b) => a + b, 0) || sampleData.mentors.reduce((a, b) => a + b, 0),
          data?.investisseurs.reduce((a, b) => a + b, 0) || sampleData.investisseurs.reduce((a, b) => a + b, 0),
        ],
        backgroundColor: ["#3B82F6", "#F59E0B"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reporting & Statistiques</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="font-semibold mb-2">Candidatures par programme</h3>
          <Bar data={barData} />
        </div>

        <div className="p-4 border rounded shadow">
          <h3 className="font-semibold mb-2">Mentors vs Investisseurs</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AdminReporting;
