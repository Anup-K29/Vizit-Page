import React from 'react'

const signInSegmentsData = [
  {
    title: "Storyboards",
    description:
      "Display site maps with safe zones, restricted areas, and fire exit locations to enhance safety and orientation.",
    icon: "📋",
  },
  {
    title: "Agreements",
    description:
      "Have visitors digitally sign terms and conditions for legal compliance and clear conduct expectations during their visit.",
    icon: "✍️",
  },
  {
    title: "Fields",
    description:
      "Gather visitor-specific data: vehicle number, student ID, mobile number, ensuring easy collection.",
    icon: "🧾",
  },
  {
    title: "Questionnaires",
    description:
      "Create questionnaires for visitors, gathering versatile information: feedback, health, and safety compliance.",
    icon: "❓",
  },
  {
    title: "Full Name / Email",
    description:
      "This segment prompts the visitor to enter their full name or email, ensuring accurate identification.",
    icon: "👤",
  },
  {
    title: "Photo Capture",
    description:
      "ProVisit's Kiosk captures a visitor photo for visual identification and security purposes.",
    icon: "📷",
  },
  {
    title: "Host Selection",
    description:
      "The visitor can simply select their appointed host from a list, streamlining the sign-in process.",
    icon: "🛎️",
  },
  {
    title: "Company Name",
    description:
      "The visitor enters the name of their company, providing additional context for their visit.",
    icon: "🏢",
  },
  {
    title: "Approved Company",
    description:
      "This segment verifies if the visitor's company is on the approved list, enhancing security.",
    icon: "✅",
  },
];


export const SignInSegmentsSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= INTRO ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 mb-4">
            A CLOSER LOOK AT SEGMENT TYPES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unpacking the Features of Your Sign-In Segments
          </h2>

          <p className="text-[#4b4b63] leading-relaxed">
            Using Flows is easy. Simply select the segment types you want to show
            in the sign-in process and in which order. Each visitor will then be
            shown the selected segments when they sign in at the kiosk.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {signInSegmentsData.map((item, index) => (
            <div key={index} className="flex gap-4">

              {/* ICON */}
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="max-w-sm">
                <h4 className="font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#4b4b63] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
