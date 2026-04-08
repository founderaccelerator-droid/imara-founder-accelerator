import React from "react";

const ShareLink = ({ candidature }) => {
  const baseUrl = "https://yourplatform.com/candidature"; // Remplace par ton URL
  const shareUrl = `${baseUrl}?id=${candidature.id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Lien copié dans le presse-papiers !");
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=Ma candidature Founder Accelerator&body=${encodeURIComponent(shareUrl)}`;
  };

  return (
    <div className="flex space-x-2 mt-3">
      <button onClick={copyToClipboard} className="bg-blue-500 text-white px-3 py-1 rounded">Copier le lien</button>
      <button onClick={shareWhatsApp} className="bg-green-500 text-white px-3 py-1 rounded">WhatsApp</button>
      <button onClick={shareFacebook} className="bg-blue-700 text-white px-3 py-1 rounded">Facebook</button>
      <button onClick={shareEmail} className="bg-gray-600 text-white px-3 py-1 rounded">Email</button>
    </div>
  );
};

export default ShareLink;
