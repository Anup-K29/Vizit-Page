import React from "react";
import { NavLink } from "react-router-dom";

export const ContactUsHomePage = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 inset-shadow-sm inset-shadow-[#AA60C8] shadow-xl  border-e-2 border-l-2 border-b-2 border-[#AA60C8] rounded-2xl px-8 py-10 inset-shadow-2xl">
          
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl font-bold text-[#0f0f1a] mb-2">
              Ready For A Digital Upgrade?
            </h3>
            <p className="text-[#4b4b63] text-2xl">
              Use free for 15 days and see how it works!
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="px-6 py-2 rounded-lg border-2 border-[#AA60C8] text-[#AA60C8] font-medium text-2xl hover:bg-[#AA60C8] hover:text-white transition shadow-xl"
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/registration-form"
              className="px-6 py-2 rounded-lg bg-[#AA60C8] hover:bg-white  text-white hover:text-[#AA60C8] font-medium text-2xl hover:opacity-90 transition border-2 border-[#AA60C8] shadow-xl"
            >
              Free Trial
            </NavLink>
          </div>

        </div>

      </div>
    </section>
  );
};
