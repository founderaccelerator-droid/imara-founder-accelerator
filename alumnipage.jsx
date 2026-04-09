import React from "react";
import AlumniList from "./AlumniList";

const AlumniPage = ({ user, alumni }) => {
  // Condition : seul l’alumni ayant terminé le programme peut voir la liste
  const canAccess = user && user.completedProgram;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Communauté Alumni</h1>

      {!canAccess && (
        <p className="text-red-500 mb-4">
          Vous devez avoir complété le programme pour rejoindre la communauté et voir les informations des alumni.
        </p>
      )}

      {canAccess && (
        <>
          <p className="mb-4">
            Félicitations ! Vous pouvez rejoindre la communauté et consulter les profils des alumni.
          </p>
          <AlumniList alumni={alumni} />
        </>
      )}
    </div>
  );
};

export default AlumniPage;
