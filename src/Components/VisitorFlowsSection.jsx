import React from 'react'
import six from "../assets/images/Features/six.png"

export const VisitorFlowsSection = () => {
  return (
     <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">

              <p className="text-sm font-semibold text-blue-600 mb-4">
                YOUR VISITORS, YOUR RULES
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Create your own personalised visitor experience with flows
              </h2>

              <p className="text-[#4b4b63] leading-relaxed mb-8">
                Every visitor is unique, and so should be their sign-in
                experience. With ProVisit Flows, customise your visitor’s
                journey to match their needs.
              </p>

              {/* <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              /> */}

              {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                Download Brochure
              </button> */}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={six}
              alt="Visitor flow example"
              className="w-full max-w-xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
