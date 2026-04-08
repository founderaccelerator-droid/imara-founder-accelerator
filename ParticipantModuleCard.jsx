import React from "react";

const ParticipantModuleCard = ({ module }) => {
  const isAccessible = module.accessible && module.participantSelected;

  return (
    <div className={`p-4 border rounded shadow ${!isAccessible ? "opacity-50" : ""}`}>
      <h4 className="font-semibold text-lg">{module.title}</h4>
      <p className="mb-2">{module.description}</p>

      {/* Vidéo */}
      {isAccessible && module.videoUrl && (
        <video
          src={module.videoUrl}
          controls
          className="mb-2 w-full max-h-64"
          preload="metadata"
        />
      )}

      {/* Documents */}
      {isAccessible && module.documents && module.documents.length > 0 && (
        <ul className="mb-2">
          {module.documents.map((doc, idx) => (
            <li key={idx}>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Quiz */}
      {isAccessible && module.quiz && (
        <button className="bg-green-500 text-white px-3 py-1 rounded mb-2">
          Lancer Quiz
        </button>
      )}

      {/* Progression */}
      {isAccessible && <p>Progression : {module.progress}%</p>}

      {!isAccessible && (
        <p className="text-red-500">
          Module non accessible pour le moment
        </p>
      )}
    </div>
  );
};

export default ParticipantModuleCard;
