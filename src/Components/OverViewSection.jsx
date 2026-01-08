
import React from "react";

import HomePage1 from "../assets/images/HomePage/HomePage1.svg"
import HomePage2 from "../assets/images/HomePage/HomePage2.svg"

export const OverviewSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* ================= SECTION 1 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* LEFT TEXT CARDS */}
          <div className="flex-1 space-y-6">
            <div className="bg-white border rounded-xl p-6 shadow-2xl">
              <h4 className="font-semibold text-xl mb-2 text-decoration: underline">Real-Time Overview</h4>
              <p className="text-md text-gray-600">
                Vizit’s central dashboard tracks checked-in visitors, expected
                guests, and delivery statuses in real time, ensuring a safe and
                organized reception area.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-2xl">
              <h4 className="font-semibold text-xl mb-2 text-decoration: underline">Data-Driven Decisions</h4>
              <p className="text-md text-gray-600">
                Identify peak hours, track host frequency, and optimize your
                front-desk operations with comprehensive reporting tools
                designed for modern offices.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={HomePage1}
              alt="Dashboard overview"
              className="rounded-xl w-full max-w-xl"
            />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          
          {/* RIGHT TEXT CARDS */}
          <div className="flex-1 space-y-6">
            <div className="bg-white border rounded-xl p-6 shadow-2xl ">
              <h4 className="font-semibold text-xl mb-2 text-decoration: underline">Effortless Management</h4>
              <p className="text-md text-gray-600">
                Use the interactive directory to search, filter, and manage
                visitor entries. Whether it’s a scheduled interview or an
                unscheduled delivery, every detail is captured accurately.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-2xl">
              <h4 className="font-semibold text-xl mb-2 text-decoration: underline">Safety & Security</h4>
              <p className="text-md text-gray-600 ">
                Keep your facility secure with built-in emergency lists, fire
                registers, and blocked visitor alerts. Vizit ensures everyone
                on-site is accounted for during critical situations.
              </p>
            </div>
          </div>

          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={HomePage2}
              alt="Visitor management table"
              className="rounded-xl w-full max-w-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
