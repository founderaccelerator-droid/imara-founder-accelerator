import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 fixed bottom-0 w-full z-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="text-sm">&copy; 2026 Founder Accelerator. Tous droits réservés.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            LinkedIn
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
            Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            YouTube
          </a>
        </div>
        <p className="text-sm mt-2 md:mt-0">
          <a href="mailto:support@founderaccelerator.com" className="hover:underline">support@founderaccelerator.com</a> | +250 788 000 000
        </p>
      </div>
    </footer>
  );
};

export default Footer;
