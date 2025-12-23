import React from 'react'
import three from "../assets/images/Features/three.png"
import four from "../assets/images/Features/four.jpg"

export const ComplianceSection = () => {
  return (
    <>
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* ================= BLOCK 1 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={three}
              alt="Compliance dashboard"
              className="w-full max-w-lg"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <p className="text-sm text-[#4b4b63] mb-4">
                ProVisit verifies compliance; non-compliant guests go on hold.
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                What your team gets
              </h3>

              <p className="text-[#4b4b63] leading-relaxed">
                ProVisit’s QR check-in features give your team total visibility
                and control across every site.
                <br /><br />
                You can instantly see who’s signed in and where, with multi-site
                viewing that shows real-time presence, visit duration, and
                expected departure.
                <br /><br />
                Every profile shows linked documents and compliance status, so
                you know if inductions, IDs, or certifications are up to date
                before guests arrive.
              </p>

            </div>
          </div>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <h3 className="text-2xl font-semibold mb-6">
                Have a question or want to
                <br />
                see a live demo of ProVisit?
              </h3>

              <p className="text-[#4b4b63] leading-relaxed">
                ProVisit does a lot – and we know not every client needs
                everything. That’s why our pricing and demos are tailored
                around what you actually need.
                <br /><br />
                Tell us about your current challenges and what you’re looking
                to improve, and we can offer a personalised demo that shows
                exactly how we can make it better.
                <br /><br />
                What happens after? Grab a brew, think it over; we’ll be right
                here if you need us.
              </p>

            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={four}
              alt="ProVisit kiosk demo"
              className="w-full max-w-lg"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
