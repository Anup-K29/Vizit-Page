import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="bg-[#b980fe] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT CARD — Form (2/3 width) */}
        <div className="md:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-md">
          <p className="text-black text-lg mb-6 leading-relaxed">
            <span className="text-[#5E17EB] font-medium">Vizit</span> can
            optimize work &amp; improve productivity by taking care of basic
            tasks. <span className="font-bold">Find out how!</span>
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
            </div>

            <button
              type="submit"
              className="bg-[#5E17EB] hover:bg-[#4C0FCC] text-white font-semibold px-8 py-2 rounded-full mt-2 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* RIGHT CARD — Contact Info (1/3 width) */}   

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col items-center text-center space-y-4">
          <h3 className="text-lg font-semibold text-black">Contact Us</h3>

          <div className="flex items-center gap-3 text-black">
            <Phone className="text-[#5E17EB]" size={20} />
            <span>+91 9560942419</span>
          </div>

          <div className="flex items-center gap-3 text-black">
            <Mail className="text-[#5E17EB]" size={20} />
            <a href="mailto:vizit@nxiaappworld.com" className="underline">
              vizit@nxiaappworld.com
            </a>
          </div>

          <div className="flex items-start gap-3 text-black justify-center">
            <MapPin className="text-[#5E17EB]" size={20} />
            <p>
              Sector–10, Noida,
              <br />
              Uttar Pradesh–201301,
              <br />
              India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
