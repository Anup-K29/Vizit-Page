import React from "react";
import eleven from "../assets/images/proVisit/eleven.png"

const DashboardOverview = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION 1: HEADING ================= */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-sm font-semibold text-green-600 mb-4">
            Powerful Dashboard
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need, at a glance
          </h2>

          <p className="text-lg text-[#4b4b63] leading-relaxed">
            With a slick interface, intuitive design, and best-in-class
            features, there's no other better way to see, monitor and manage
            your visitors.
          </p>
        </div>

        {/* ================= SECTION 2: CONTENT ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT: TEXT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md space-y-14">

              {/* Block 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Live Overview
                </h3>
                <p className="text-[#4b4b63] leading-relaxed">
                  Track visitors coming in and leaving, time and attendance
                  for all visitor types and who's on hold. See who's expected
                  today, tomorrow or in the future and a whole lot more.
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Prebook Visitors
                </h3>
                <p className="text-[#4b4b63] leading-relaxed">
                  Generate email invitations effortlessly from your dashboard,
                  enabling easy prebooking of visitors in advance, resulting
                  in time and cost savings.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={eleven}
              alt="Dashboard Overview"
              className="w-full max-w-xl rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;
