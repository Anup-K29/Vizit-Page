import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100  text-gray-700 py-6 border-t border-gray-300">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <div>
          &copy; {new Date().getFullYear()} Virtual Management System. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
