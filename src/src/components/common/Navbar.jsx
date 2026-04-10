import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 fixed w-full z-50 shadow">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">imara founder accelerator</Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/login">Connexion</Link>
          <Link to="/ressources">Ressources</Link>
          <Link to="/formation">Formation</Link>
          <Link to="/candidatures">Candidatures</Link>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link to="/devenir-mentor">Devenir mentor</Link>
          <button
            onClick={() => alert("Assistant AI en cours de développement")}
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            Assistant AI
          </button>
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-2 py-1 rounded text-black"
          />
        </div>

        {/* Hamburger menu mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-blue-500 p-3 rounded">
          <Link to="/login">Connexion</Link>
          <Link to="/ressources">Ressources</Link>
          <Link to="/formation">Formation</Link>
          <Link to="/candidatures">Candidatures</Link>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link to="/devenir-mentor">Devenir mentor</Link>
          <button
            onClick={() => alert("Assistant AI en cours de développement")}
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            Assistant AI
          </button>
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-2 py-1 rounded text-black"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
