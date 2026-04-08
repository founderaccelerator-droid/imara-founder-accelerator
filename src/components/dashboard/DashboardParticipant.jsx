import React from "react";

// Exemple de données : à remplacer par l'API réelle
const exampleCandidatures = [
  {
    program: "SeedLift",
    status: "draft",
    canEdit: true,
    modulesCompleted: 0,
  },
  {
    program: "FikraLaunch",
    status: "submitted",
    canEdit: false,
    modulesCompleted: 2,
  },
];

const DashboardParticipant = () => {

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">

      <h2 className="text-3xl font-bold mb-6">Bienvenue, [Nom Participant]</h2>

      <p className="mb-6 text-gray-700">
        Voici vos candidatures et votre progression dans le programme.
      </p>

      {exampleCandidatures.map((c, idx) => (
        <div key={idx} className="bg-white shadow rounded p-6 mb-4">
          <h3 className="text-xl font-semibold mb-2">{c.program}</h3>
          <p className="mb-2">
            Statut : <span className="font-medium">{c.status === "draft" ? "Brouillon" : "Soumise"}</span>
          </p>
          <p className="mb-2">
            Modules complétés : {c.modulesCompleted} / [Total Modules]
          </p>

          <div className="flex gap-3 mt-4">
            {c.canEdit ? (
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Modifier candidature
              </button>
            ) : (
              <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
                Candidature verrouillée
              </button>
            )}

            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Voir modules
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

{c.modules && c.modules.length > 0 && (
  <div className="mt-4">
    <h4 className="font-semibold mb-2">Modules</h4>
    {c.modules.map((m, i) => (
      <div key={i} className="mb-2">
        <p>{m.name}</p>
        <div className="bg-gray-200 rounded h-2 w-full">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${m.progress}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
)}
{c.feedback && (
  <div className="mt-4 p-3 bg-yellow-100 rounded">
    <h5 className="font-semibold mb-1">Feedback Mentor</h5>
    <p>{c.feedback}</p>
  </div>
)}
{c.documents && (
  <div className="mt-4">
    <h4 className="font-semibold mb-2">Documents Uploadés</h4>
    <ul className="list-disc pl-5">
      {c.documents.map((doc, i) => (
        <li key={i}>
          <a href={doc.url} target="_blank" className="text-blue-600 underline">
            {doc.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
import { useEffect, useState } from "react";

// Exemple simple de notifications mock
const exampleNotifications = [
  { id: 1, message: "Votre module 2 a été validé", read: false },
  { id: 2, message: "Nouveau feedback mentor disponible", read: false },
];

const [notifications, setNotifications] = useState(exampleNotifications);

// Marquer notification comme lue
const markAsRead = (id) => {
  setNotifications(
    notifications.map((n) => n.id === id ? { ...n, read: true } : n)
  );
};
<div className="mb-6">
  <h4 className="text-xl font-semibold mb-2">Notifications</h4>
  {notifications.length === 0 ? (
    <p>Aucune notification.</p>
  ) : (
    <ul className="list-disc pl-5">
      {notifications.map((n) => (
        <li
          key={n.id}
          className={`mb-1 ${n.read ? "text-gray-400" : "text-black font-medium"}`}
        >
          {n.message}
          {!n.read && (
            <button
              className="ml-2 text-blue-600 underline"
              onClick={() => markAsRead(n.id)}
            >
              Marquer comme lu
            </button>
          )}
        </li>
      ))}
    </ul>
  )}
</div>
# notify_participant.rb
def send_feedback_notification(participant, message)
  Notification.create(user: participant, message: message)
  ParticipantMailer.with(participant: participant, message: message).feedback_email.deliver_later
end
const canAccessModules = candidature.status === "selected";
{canAccessModules ? (
  <div className="mt-4">
    <h4 className="text-xl font-semibold mb-2">Modules de formation</h4>
    {c.modules.map((m, i) => (
      <div key={i} className="mb-4 p-3 border rounded hover:shadow">
        <p className="font-medium">{m.name}</p>
        <div className="bg-gray-200 rounded h-2 w-full mb-1">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${m.progress}%` }}
          ></div>
        </div>
        <button
          className="mt-1 px-3 py-1 bg-green-600 text-white rounded"
          onClick={() => openModule(m.id)}
        >
          Ouvrir module
        </button>
      </div>
    ))}
  </div>
) : (
  <p className="mt-4 text-gray-500 font-medium">
    Vos modules seront accessibles une fois que vous serez sélectionné.
  </p>
)}
const ModuleContent = ({ module, candidature }) => {
  if (candidature.status !== "selected") {
    return <p className="text-red-500">Vous n’avez pas encore accès à ce contenu.</p>;
  }

  return (
    <div>
      <h5>{module.name}</h5>
      <video
        src={module.videoUrl}
        controls
        width="100%"
        maxHeight="400px"
        onVolumeChange={(e) => limitVolume(e)}
      />
      <Quiz moduleId={module.id} />
    </div>
  );
};
const openModule = (moduleId) => {
  // Redirection vers la page du module
  navigate(`/dashboard-participant/module/${moduleId}`);
};
# Module.rb
class Module < ApplicationRecord
  # Exemple d’attributs : start_time, end_time
  # start_time et end_time = DateTime
end
{
  "id": 1,
  "name": "Module 1 - Introduction",
  "videoUrl": "https://.../module1.mp4",
  "quizId": 101,
  "start_time": "2026-04-08T09:00:00Z",
  "end_time": "2026-04-08T17:00:00Z",
  "progress": 40
    }
const now = new Date();
const start = new Date(module.start_time);
const end = new Date(module.end_time);

const canAccessModule = candidature.status === "selected" && now >= start && now <= end;
{canAccessModule ? (
  <div>
    <h5>{module.name}</h5>
    <video
      src={module.videoUrl}
      controls
      width="100%"
      maxHeight="400px"
      onVolumeChange={(e) => limitVolume(e)}
    />
    <Quiz moduleId={module.id} />
    <div className="mt-2">
      <p>Progression : {module.progress}%</p>
    </div>
  </div>
) : (
  <p className="text-red-500 font-medium">
    Ce module sera disponible du {start.toLocaleString()} au {end.toLocaleString()}.
  </p>
)}
const updateProgress = (moduleId, percent) => {
  fetch(`/api/modules/${moduleId}/progress`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ progress: percent }),
  });
};
import ShareLink from "./ShareLink";

// Dans la partie candidature sélectionnée
{selectedCandidature && (
  <div className="mt-4 p-2 border rounded bg-gray-50">
    <h4 className="font-semibold mb-2">Partager votre candidature :</h4>
    <ShareLink candidature={selectedCandidature} />
  </div>
)}
import ProgramProgress from './ProgramProgress';
<ProgramProgress modules={modules} />
{modules.map(m => (
  <ModuleCard key={m.id} module={m} onUpdateStatus={handleModuleUpdate} />
))}
export default DashboardParticipant;
