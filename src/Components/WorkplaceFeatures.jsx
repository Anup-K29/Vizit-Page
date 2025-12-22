import React from "react";

const workplaceFeaturesData = [
  {
    title: "Reporting",
    description:
      "See who is on-site, monitor time and attendance, and run a fire report instantly from your phone.",
    icon: "📊",
  },
  {
    title: "Document Checks",
    description:
      "Effortlessly upload, store, and maintain up-to-date records of certificates and documents.",
    icon: "📄",
  },
  {
    title: "Contactless Sign-in",
    description:
      "Effortlessly sign-in to your premises through the convenience of a QR code system.",
    icon: "📱",
  },
  {
    title: "Alerts",
    description:
      "Stay on top of your workplace activity with alerts that notify you of site arrivals and failed access attempts.",
    icon: "🔔",
  },
  {
    title: "Photo ID Pass",
    description:
      "Capture a photo using our system and instantly print a visitor pass during the sign-in process.",
    icon: "🪪",
  },
  {
    title: "Time & Attendance",
    description:
      "Effortlessly track visitor and employee time and attendance through a user-friendly dashboard.",
    icon: "⏱️",
  },
  {
    title: "Kiosk Questions",
    description:
      "Create and ask questions on site-arrival. Incorrect answers result in the visitor being placed on-hold.",
    icon: "❓",
  },
  {
    title: "On-Hold",
    description:
      "Automatically hold visitors with invalid site authorisation and notify a host, ensuring a secure premises.",
    icon: "⏸️",
  },
  {
    title: "Compliance Checks",
    description:
      "Sign and adhere to your site safety and GDPR policies when signing in. Purge data after a specific period.",
    icon: "✅",
  },
];





// const WorkplaceFeatures = () => {
//   return (
//     <section className="w-full py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= SECTION 1: HEADING ================= */}
//         <div className="max-w-3xl mx-auto text-center mb-20">
//           <p className="text-sm font-semibold text-green-600 mb-4">
//             Simplify Your Work Tasks
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Some of our features to help
//             <br />
//             streamline your workplace
//           </h2>

//           <p className="text-lg text-[#4b4b63] leading-relaxed">
//             Everything has been intentionally designed to include the features
//             you want, right where you need them – without being complicated.
//           </p>
//         </div>

//         {/* ================= SECTION 2: FEATURES GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16">
//           {workplaceFeaturesData.map((feature, index) => (
//             <div key={index} className="flex gap-4">
              
//               {/* ICON */}
//               <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg">
//                 {feature.icon}
//               </div>

//               {/* TEXT */}
//               <div>
//                 <h3 className="font-semibold text-lg mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-[#4b4b63] leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

const WorkplaceFeatures = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION 1: HEADING ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-green-600 mb-4">
            Simplify Your Work Tasks
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Some of our features to help
            <br />
            streamline your workplace
          </h2>

          <p className="text-lg text-[#4b4b63] leading-relaxed">
            Everything has been intentionally designed to include the features
            you want, right where you need them – without being complicated.
          </p>
        </div>

        {/* ================= SECTION 2: FEATURES (FLEX) ================= */}
        <div className="flex flex-wrap gap-x-14 gap-y-16">
          {workplaceFeaturesData.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 w-full sm:w-[48%] lg:w-[30%]"
            >
              
              {/* ICON */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center text-lg">
                {feature.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4b4b63] leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default WorkplaceFeatures;
