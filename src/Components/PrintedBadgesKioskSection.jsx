import React from 'react'
import ten from "../assets/images/Features/ten.png"

export const PrintedBadgesKioskSection = () => {
  return (
     <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ================= LEFT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={ten}
              alt="Reception interactive kiosk"
              className="w-full max-w-xl"
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <p className="text-sm font-semibold text-blue-600 mb-4">
                RECEPTION INTERACTIVE KIOSK
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Sign-in and collect your
                <br />
                visitor pass in moments
              </h2>

              <p className="text-[#4b4b63] leading-relaxed">
                On sign-in, ProVisit will collect important information about
                the visitor on the kiosk, such as their full name, who they're
                visiting and any rules or conditions set out by the company
                during this process. Once completed, a visitor badge is
                printed within seconds.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
