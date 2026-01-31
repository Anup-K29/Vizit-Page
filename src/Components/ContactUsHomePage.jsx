import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ContactUsForm } from "@/Form/ContactUsForm";
import { fa } from "zod/v4/locales";

export const ContactUsHomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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
              {/* <NavLink
              to="/contact"
              className="px-6 py-2 rounded-lg border-2 border-[#AA60C8] text-[#AA60C8] font-medium text-2xl hover:bg-[#AA60C8] hover:text-white transition shadow-xl"
            >
              Contact Us
            </NavLink> */}

              <button
                onClick={() => setOpen(true)}
                className="px-6 py-2 rounded-lg border-2 border-[#AA60C8] text-[#AA60C8] font-medium text-2xl hover:bg-[#AA60C8] hover:text-white transition shadow-xl cursor-pointer"
              >
                Contact Us
              </button>

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

      {/* MOODAL */}

      {open && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
            >
              x
            </button>
          <ContactUsForm />

          </div>

        </div>
      )}
    </>
  );
};
