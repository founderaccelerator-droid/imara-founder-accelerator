 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState("login"); // "login" ou "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    role: "participant",
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      // Appel API backend pour vérifier email + password
      // Simuler la redirection selon rôle
      const role = "participant"; // simuler
      if (role === "participant") navigate("/dashboard/participant");
      else if (role === "mentor") navigate("/dashboard/mentor");
      else if (role === "investor") navigate("/dashboard/investor");
      else if (role === "alumni") navigate("/dashboard/alumni");
      else if (role === "admin") navigate("/dashboard/admin");
    } else {
      // Mode création de compte
      // Vérification mot de passe + acceptTerms
      if (form.password !== form.confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }
      if (!form.acceptTerms) {
        alert("Vous devez accepter les conditions");
        return;
      }
      // Appel API création utilisateur
      alert("Compte créé. Vérifiez votre email pour activer votre compte.");
      setMode("login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between mb-6">
          <button
            className={`px-4 py-2 ${mode === "login" ? "bg-blue-600 text-white" : ""}`}
            onClick={() => setMode("login")}
          >
            Connexion
          </button>
          <button
            className={`px-4 py-2 ${mode === "signup" ? "bg-blue-600 text-white" : ""}`}
            onClick={() => setMode("signup")}
          >
            Créer un compte
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Pays"
                value={form.country}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {mode === "signup" && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="participant">Participant</option>
                <option value="mentor">Mentor</option>
                <option value="investor">Investisseur</option>
                <option value="alumni">Alumni</option>
              </select>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onChange={handleChange}
                  className="mr-2"
                />
                J'accepte les conditions d'utilisation
              </label>
            </>
          )}

          {mode === "login" && (
            <div className="flex justify-between items-center text-sm">
              <label>
                <input type="checkbox" className="mr-1" />
                Se souvenir de moi
              </label>
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => alert("Mot de passe oublié : fonctionnalité en cours")}
              >
                Mot de passe oublié ?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {mode === "login" ? "Se connecter" : "Créer mon compte"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
