import React from 'react'
import seven from "../assets/images/Features/seven.png"
import eight from "../assets/images/Features/eight.png"

export const FlowsIntroductionSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* ================= TOP INTRO ================= */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-blue-600 mb-4">
            INTRODUCTION TO FLOWS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover the power of personalisation with flows
          </h2>

          <p className="text-[#4b4b63] leading-relaxed">
            Our innovative feature allows you to tailor the sign-in process to
            each guest, creating a seamless and personalised experience that
            leaves a lasting impression. Dive in to discover how Flows can
            revolutionise your visitor management process.
          </p>
        </div>

        {/* ================= MIDDLE BLOCK ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <p className="text-sm font-semibold text-blue-600 mb-4">
                YOUR KIOSK’S NEW BEST FRIEND
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Decide the Order of Each
                <br />
                Visitor's Sign-In Journey
              </h3>

              <p className="text-[#4b4b63] leading-relaxed">
                Flows puts you in the director’s chair of your visitor’s sign-in
                journey. Customise the sequence of sign-in segments for each
                visitor.
                <br /><br />
                From full name to photo, company name to storyboards, you decide
                the order. Create a sign-in experience tailored to your needs.
              </p>

            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={seven}
              alt="Visitor flow steps"
              className="w-full max-w-xl"
            />
          </div>

        </div>

        {/* ================= BOTTOM BLOCK ================= */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={eight}
              alt="Secure sign-in illustration"
              className="w-full max-w-xl"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <p className="text-sm font-semibold text-blue-600 mb-4">
                ENHANCED SECURITY & EFFICIENCY
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Experience a Safe and Secure
                <br />
                Way to Manage Visitor Sign-in
              </h3>

              <p className="text-[#4b4b63] leading-relaxed">
                Flows is a tool for you. It customises the sign-in process to
                gather visitor insights. It tailors the experience to
                individual needs.
                <br /><br />
                Whether a simple sign-in or stringent questioning is required,
                it ensures a secure, personalised experience.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
