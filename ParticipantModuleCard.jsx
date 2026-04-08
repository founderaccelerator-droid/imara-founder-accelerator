import React from "react";

const ParticipantModuleCard = ({ module }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h4 className="font-semibold">{module.title}</h4>
      <p>{module.description}</p>
      <p>Status: {module.completed ? "Complété" : "En cours"}</p>
      <p>Horaires : {module.schedule}</p>

      {/* Accès vidéos et quiz uniquement si la candidature est confirmée */}
      {module.accessible ? (
        <div className="mt-2">
          {module.videoUrl && (
            <video
              src={module.videoUrl}
              controls
              width="100%"
              style={{ maxHeight: "300px" }}
            ></video>
          )}
          {module.quizUrl && (
            <a
              href={module.quizUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-green-500 text-white px-3 py-1 rounded"
            >
              Accéder au quiz
            </a>
          )}
        </div>
      ) : (
        <p className="mt-2 text-red-500">Module non accessible pour le moment.</p>
      )}
    </div>
  );
};

export default ParticipantModuleCard;
