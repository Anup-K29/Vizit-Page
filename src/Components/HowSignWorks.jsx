import React from 'react'

const signInStepsData = [
  {
    step: 1,
    text:
      "Pre-register from your portal, add visit details (location, date/time, visit type, host, notes). ProVisit emails the invite with a secure QR code.",
  },
  {
    step: 2,
    text:
      "Visitors scan the QR code at the reception kiosk or turnstiles. Their details are automatically filled and confirmed within seconds. Guests can also search for their name manually if pre-booked.",
  },
  {
    step: 3,
    text:
      "Hosts are notified instantly of arrival via SMS/Email; a badge prints automatically for the guest to wear for a professional first impression.",
  },
];

const builtAroundYouData = {
  title: "Built around you",
  text:
    "We work with you to deliver flexible sign-in and onboarding solutions that fit your processes. With a range of onboarding options to suit different needs, we’re always improving the experience by listening to feedback and making things better every day.",
};

const StepCard = ({ step, text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md">
      
      {/* STEP NUMBER */}
      <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white font-semibold rounded-md mb-4">
        {step}
      </div>

      {/* TEXT */}
      <p className="text-sm text-[#4b4b63] leading-relaxed">
        {text}
      </p>
    </div>
  );
};


export const HowSignWorks = () => {
  return (
    <>
 <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-semibold">
            One example of how sign-in works
          </h2>
        </div>

        {/* ================= CONTENT (FLEX) ================= */}
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-20">

          {/* STEP 1 */}
          <StepCard
            step={signInStepsData[0].step}
            text={signInStepsData[0].text}
          />

          {/* STEP 2 */}
          <StepCard
            step={signInStepsData[1].step}
            text={signInStepsData[1].text}
          />

          {/* STEP 3 */}
          <StepCard
            step={signInStepsData[2].step}
            text={signInStepsData[2].text}
          />

          {/* BUILT AROUND YOU */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md w-full">
            <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-md mb-4">
              {builtAroundYouData.title}
            </span>

            <p className="text-sm text-[#4b4b63] leading-relaxed">
              {builtAroundYouData.text}
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
