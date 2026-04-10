import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

// Dashboards
import AdminDashboard from "./admin/AdminDashboard";
import ParticipantDashboard from "./dashboards/DashboardParticipant";
import MentorDashboard from "./dashboards/DashboardMentor";
import InvestorDashboard from "./investor/InvestorDashboard";
import AlumniDashboard from "./alumni/AlumniDashboard";

function App() {
  // Simuler utilisateur connecté et rôle
  const [user, setUser] = useState({
    isLoggedIn: false,
    role: null, // participant, mentor, investor, alumni, admin
  });

  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user.isLoggedIn) {
      return <Navigate to="/login" />;
    }
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Page publique */}
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />

        {/* Dashboards protégés par rôle */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/participant"
          element={
            <ProtectedRoute allowedRoles={["participant"]}>
              <ParticipantDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/mentor"
          element={
            <ProtectedRoute allowedRoles={["mentor"]}>
              <MentorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/investor"
          element={
            <ProtectedRoute allowedRoles={["investor"]}>
              <InvestorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/alumni"
          element={
            <ProtectedRoute allowedRoles={["alumni"]}>
              <AlumniDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
