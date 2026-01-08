import React from "react";
import { NavLink } from "react-router-dom";

export const AnnouncementBar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-60 bg-[#AA60C8] text-white text-[16.75px] py-2">
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-2">
        <span>Explore all features free for 15 days!</span>

        <NavLink
          to="/registration-form"
          className="font-semibold underline hover:text-gray-800"
        >
          Start Your Free Trial
        </NavLink>
      </div>
    </div>
  );
};
