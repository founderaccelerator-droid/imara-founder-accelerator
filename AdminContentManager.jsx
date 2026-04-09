import React, { useState } from "react";

const AdminContentManager = ({ initialModules, initialMedia, initialTestimonials }) => {
  const [modules, setModules] = useState(initialModules);
  const [media, setMedia] = useState(initialMedia);
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  // Ajouter module
  const addModule = (newModule) => {
    setModules([...modules, newModule]);
  };

  // Supprimer module
  const removeModule = (index) => {
    const updated = modules.filter((_, idx) => idx !== index);
    setModules(updated);
  };

  // Ajouter média
  const addMedia = (newMedia) => {
    setMedia([...media, newMedia]);
  };

  // Supprimer média
  const removeMedia = (index) => {
    const updated = media.filter((_, idx) => idx !== index);
    setMedia(updated);
  };

  // Ajouter témoignage
  const addTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, newTestimonial]);
  };

  // Supprimer témoignage
  const removeTestimonial = (index) => {
    const updated = testimonials.filter((_, idx) => idx !== index);
    setTestimonials(updated);
  };

  return (
    <div className="p-6 border rounded shadow space-y-6">
      <h2 className="text-xl font-bold mb-4">Gestion Contenus</h2>

      <div>
        <h3 className="font-semibold mb-2">Modules</h3>
        <ul>
          {modules.map((m, idx) => (
            <li key={idx} className="mb-1 flex justify-between">
              {m.title}
              <button onClick={() => removeModule(idx)} className="text-red-500">Supprimer</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Médias</h3>
        <ul>
          {media.map((m, idx) => (
            <li key={idx} className="mb-1 flex justify-between">
              {m.name}
              <button onClick={() => removeMedia(idx)} className="text-red-500">Supprimer</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Témoignages</h3>
        <ul>
          {testimonials.map((t, idx) => (
            <li key={idx} className="mb-1 flex justify-between">
              {t.name}
              <button onClick={() => removeTestimonial(idx)} className="text-red-500">Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminContentManager;
