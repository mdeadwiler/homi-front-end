import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-[#0D2E26] text-white text-sm">
      <div>
        <p>homi © 2024 All rights reserved.</p>
      </div>
      <div className="flex space-x-6">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/careers" className="hover:underline">
          Careers
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/contact" className="hover:underline">
          Contact us
        </a>
        <a href="/language" className="hover:underline">
          Language
        </a>
      </div>
    </footer>
  );
};


