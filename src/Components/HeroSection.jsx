
import React from "react";
import { NavLink } from "react-router-dom";
import one from "../assets/images/proVisit/one.png"; // 🔁 replace with your image path

export const HeroSection = () => {
  return (
    <section
      className="w-full pt-32 pb-20 px-6"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #ffffff 70%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="text-sm font-semibold text-[#6b5cff] mb-4">
            UK’s #1 Visitor and Contractor Software
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#0f0f1a] leading-tight mb-6">
            Simplify Sign-in
          </h1>

          <p className="text-[#4b4b63] text-lg leading-relaxed max-w-xl mb-10">
            We get it – you want a paper-free sign-in approval process for
            contractors and visitors without the burden of extra paperwork or
            compromising on security.
          </p>

          {/* ===== Feature Blocks ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Feature 1 */}
            <div>
              <h3 className="font-semibold text-lg text-[#0f0f1a] mb-2">
                Manage Contractors
              </h3>
              <p className="text-[#4b4b63] text-sm mb-4">
                Pre-book, digital sign-in, online inductions, manage documents
                […]
              </p>
              <NavLink
                to="/registration-form"
                className="inline-flex items-center gap-2 text-[#6b5cff] font-medium hover:gap-3 transition-all"
              >
                Get Started <span>→</span>
              </NavLink>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="font-semibold text-lg text-[#0f0f1a] mb-2">
                Manage Visitors
              </h3>
              <p className="text-[#4b4b63] text-sm mb-4">
                Photo ID pass, QR code sign in, time & attendance, asset tracking
                […]
              </p>
              <NavLink
                to="/registration-form"
                className="inline-flex items-center gap-2 text-[#6b5cff] font-medium hover:gap-3 transition-all"
              >
                Get Started <span>→</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={one}
            alt="Visitor Management Dashboard"
            className="w-full max-w-xl rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
};
