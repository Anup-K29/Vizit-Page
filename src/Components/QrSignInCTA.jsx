import React from 'react'
import one from "../assets/images/Features/one.jpg"

export const QrSignInCTA = () => {
  return (
      <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Sign-in with a QR code in seconds.
                <br />
                Not minutes.
              </h2>

              <p className="text-[#4b4b63] text-lg leading-relaxed mb-8">
                Give visitors a smooth, secure arrival – QR codes, instant host
                alerts, and printed badges ready on entry.
              </p>

              {/* Email Input + Button */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                  Download Leaflet
                </button>
              </div> */}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={one}
              alt="QR code sign-in"
              className="w-full max-w-lg rounded-xl"
            />
          </div>

        </div>

      </div>
    </section>

  )
}
