import React, { useState } from "react";

const MediaGallery = ({ mediaItems }) => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? mediaItems : mediaItems.filter(item => item.type === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Galerie Média</h1>

      {/* Filtre */}
      <div className="mb-4 flex gap-4">
        {["all", "photo", "video", "article"].map(type => (
          <button
            key={type}
            className={`px-3 py-1 rounded ${
              filter === type ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Grille des médias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="border rounded p-2 shadow">
            {item.type === "photo" && (
              <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
            )}
            {item.type === "video" && (
              <video src={item.url} controls className="w-full h-48" preload="metadata" />
            )}
            {item.type === "article" && (
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  Lire l'article
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
