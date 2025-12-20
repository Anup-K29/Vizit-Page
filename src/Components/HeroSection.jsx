// import React from "react";
// import { ChevronsDown } from "lucide-react";
// import StarBorder from "./StarBorder.jsx";
// import SplitText from "./SplitText.jsx";
// import { NavLink } from "react-router-dom";

// export const PitchStrip = () => {
//   return (
//     <section
//       className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden "
//       style={{
//         background: `radial-gradient(50% 50% at 50% 50%, #f5f5f5 19.23%, #f7f0fa 34.62%, #f7f0fa 98.56%)`,
//       }}
//     >
//       {/* ✅ Typing Text Animation */}
//       <div className="max-w-5xl mx-auto text-center mb-22">
//         <SplitText
//           as="h2"
//           text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
//            splitType = 'chars'

//           className="block w-full text-center text-4xl md:text-6xl font-semibold text-black leading-tight md:leading-[1.4] whitespace-pre-wrap"
//         />
//       </div>

//       {/* ✅ Floating + Glowing “Free Demo” Button */}
//       <div className="absolute bottom-[18%] flex justify-center w-full ">
//         <StarBorder
//           className="px-10 py-4 rounded-full text-white font-semibold text-lg 
//           bg-linear-to-r from-[#9383a5] to-[#724eb1] 
//           shadow-[0_10px_25px_rgba(0,0,0,0.25)] 
//           hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] 
//           transition-all duration-300 
//           animate-float-glow"
//         >
//           <NavLink to ="/registration-form">

//           Free Demo
//           </NavLink>
//         </StarBorder>
//       </div>

//       {/* ✅ Scroll-Down Arrow */}
//       <div className="absolute bottom-2 flex justify-center w-full scale-125">
//         <button
//           onClick={() => {
//             const nextSection = document.getElementById("next-section");
//             nextSection?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="cursor-pointer"
//         >
//           <ChevronsDown className="w-10 h-10 text-black/30 animate-bounce opacity-90" />
//         </button>
//       </div>

//       {/* ✅ Inline CSS animations for float + glow */}
//       <style>
//         {`
//           /* Floating Motion */
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }

//           /* Glowing Aura */
//           @keyframes glow {
//             0%, 100% {
//               box-shadow: 0 0 25px rgba(255, 255, 255, 0.15),
//                           0 0 45px rgba(196, 147, 255, 0.2);
//             }
//             50% {
//               box-shadow: 0 0 35px rgba(255, 255, 255, 0.25),
//                           0 0 60px rgba(196, 147, 255, 0.4);
//             }
//           }

//           /* Combine float + glow */
//           .animate-float-glow {
//             animation: float 3s ease-in-out infinite, glow 4s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };



import React from "react";
import { NavLink } from "react-router-dom";
import one from "../assets/images/proVisit/one.png"; // 🔁 replace with your image path

export const HeroSection = () => {
  return (
    <section
      className="w-full pt-32 pb-20 px-6"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #ffffff 70%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <p className="text-sm font-semibold text-[#6b5cff] mb-4">
            UK’s #1 Visitor and Contractor Software
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#0f0f1a] leading-tight mb-6">
            Simplify Sign-in
          </h1>

          <p className="text-[#4b4b63] text-lg leading-relaxed max-w-xl mb-10">
            We get it – you want a paper-free sign-in approval process for
            contractors and visitors without the burden of extra paperwork or
            compromising on security.
          </p>

          {/* ===== Feature Blocks ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Feature 1 */}
            <div>
              <h3 className="font-semibold text-lg text-[#0f0f1a] mb-2">
                Manage Contractors
              </h3>
              <p className="text-[#4b4b63] text-sm mb-4">
                Pre-book, digital sign-in, online inductions, manage documents
                […]
              </p>
              <NavLink
                to="/registration-form"
                className="inline-flex items-center gap-2 text-[#6b5cff] font-medium hover:gap-3 transition-all"
              >
                Get Started <span>→</span>
              </NavLink>
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="font-semibold text-lg text-[#0f0f1a] mb-2">
                Manage Visitors
              </h3>
              <p className="text-[#4b4b63] text-sm mb-4">
                Photo ID pass, QR code sign in, time & attendance, asset tracking
                […]
              </p>
              <NavLink
                to="/registration-form"
                className="inline-flex items-center gap-2 text-[#6b5cff] font-medium hover:gap-3 transition-all"
              >
                Get Started <span>→</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={one}
            alt="Visitor Management Dashboard"
            className="w-full max-w-xl rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
};
