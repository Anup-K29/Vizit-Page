// import React from "react";
// import { ChevronsDown } from "lucide-react";
// import StarBorder from "./StarBorder.jsx";
// import TextType from "./TextType.jsx"

// export const PitchStrip = () => {
//   // put this above the return (inside PitchStrip)
  

//   return (
//     <section
//       className="min-h-[85vh] flex items-center justify-center px-6"
//       style={{
//         background: `radial-gradient(50% 50% at 50% 50%, #6730CF 19.23%, #7037DB 34.62%, #C493FF 98.56%)`,
//       }}
//     >
//       <div className="max-w-5xl mx-auto text-center mt-38">
//       <TextType
//   as="h2"
//   text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
//   typingSpeed={50}
//   initialDelay={300}
//   loop={false}
//   showCursor={true}
//   className="block w-full text-center text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.2] whitespace-pre-wrap"
// />

// <div className="absolute bottom-[28%] flex justify-center w-full">

//         <StarBorder
//           className="mt-22 px-10 py-4 rounded-full text-white font-semibold text-lg bg-linear-to-r from-[#C493FF] to-[#6730CF] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
//         >
//           Free Demo
//         </StarBorder>
// </div>

//         <div className="mt-16 flex justify-center scale-125">
//           <button onClick={() => {
//             const nextSection = document.getElementById("next-section");

//             nextSection?.scrollIntoView({ behavior: "smooth" })
//           }}
//             className="mt-3 cursor-pointer">

//             <ChevronsDown className="w-10 h-10 text-white/30 mt-3 animate-bounce opacity-90" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };




// import React from "react";
// import { ChevronsDown } from "lucide-react";
// import StarBorder from "./StarBorder.jsx";
// import TextType from "./TextType.jsx";

// export const PitchStrip = () => {
//   return (
//     <section
//       className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden"
//       style={{
//         background: `radial-gradient(50% 50% at 50% 50%, #6730CF 19.23%, #7037DB 34.62%, #C493FF 98.56%)`,
//       }}
//     >
//       {/* ✅ Text stays dynamic and can expand without moving the button */}
//       <div className="max-w-5xl mx-auto text-center mb-28">  
//         <TextType
//           as="h2"
//           text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
//           typingSpeed={50}
//           initialDelay={300}
//           loop={false}
//           showCursor={true}
//           className="block w-full text-center text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.2] whitespace-pre-wrap"
//         />
//       </div>

//       {/* ✅ Button fixed to center (not affected by text height) */}
//       <div className="absolute bottom-[28%] flex justify-center w-full ">
//         <StarBorder
//           className="px-10 py-4 mt-30 rounded-full text-white font-semibold text-lg bg-linear-to-r from-[#C493FF] to-[#6730CF] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
//         >
//           Free Demo
//         </StarBorder>
//       </div>

//       {/* ✅ Scroll-down arrow still works normally */}
//       <div className="absolute bottom-10 flex justify-center w-full scale-125">
//         <button
//           onClick={() => {
//             const nextSection = document.getElementById("next-section");
//             nextSection?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="cursor-pointer"
//         >
//           <ChevronsDown className="w-10 h-10 text-white/30 animate-bounce opacity-90" />
//         </button>
//       </div>
//     </section>
//   );
// };





// import React from "react";
// import { ChevronsDown } from "lucide-react";
// import StarBorder from "./StarBorder.jsx";
// import TextType from "./TextType.jsx";

// export const PitchStrip = () => {
//   return (
//     <section
//       className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden"
//       style={{
//         background: `radial-gradient(50% 50% at 50% 50%, #6730CF 19.23%, #7037DB 34.62%, #C493FF 98.56%)`,
//       }}
//     >
//       {/* ✅ Text animation */}
//       <div className="max-w-5xl mx-auto text-center mb-28">
//         <TextType
//           as="h2"
//           text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
//           typingSpeed={50}
//           initialDelay={300}
//           loop={false}
//           showCursor={true}
//           className="block w-full text-center text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.2] whitespace-pre-wrap"
//         />
//       </div>

//       {/* ✅ Floating “Free Demo” button */}
//       <div className="absolute bottom-[28%] flex justify-center w-full">
//         <StarBorder
//           className="px-10 py-4 rounded-full text-white font-semibold text-lg bg-linear-to-r from-[#C493FF] to-[#6730CF] 
//           shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] 
//           transition-all duration-300 animate-float"
//         >
//           Free Demo
//         </StarBorder>
//       </div>

//       {/* ✅ Scroll-down arrow */}
//       <div className="absolute bottom-10 flex justify-center w-full scale-125">
//         <button
//           onClick={() => {
//             const nextSection = document.getElementById("next-section");
//             nextSection?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="cursor-pointer"
//         >
//           <ChevronsDown className="w-10 h-10 text-white/30 animate-bounce opacity-90" />
//         </button>
//       </div>

//       {/* ✅ Inline keyframes for floating animation */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }
//           .animate-float {
//             animation: float 3s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };



import React from "react";
import { ChevronsDown } from "lucide-react";
import StarBorder from "./StarBorder.jsx";
import TextType from "./TextType.jsx";

export const PitchStrip = () => {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden "
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, #6730CF 19.23%, #7037DB 34.62%, #C493FF 98.56%)`,
      }}
    >
      {/* ✅ Typing Text Animation */}
      <div className="max-w-5xl mx-auto text-center mb-22">
        <TextType
          as="h2"
          text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
          typingSpeed={50}
          initialDelay={300}
          loop={false}
          showCursor={true}
          className="block w-full text-center text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.2] whitespace-pre-wrap"
        />
      </div>

      {/* ✅ Floating + Glowing “Free Demo” Button */}
      <div className="absolute bottom-[18%] flex justify-center w-full ">
        <StarBorder
          className="px-10 py-4 rounded-full text-white font-semibold text-lg 
          bg-linear-to-r from-[#C493FF] to-[#6730CF] 
          shadow-[0_10px_25px_rgba(0,0,0,0.25)] 
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] 
          transition-all duration-300 
          animate-float-glow"
        >
          Free Demo
        </StarBorder>
      </div>

      {/* ✅ Scroll-Down Arrow */}
      <div className="absolute bottom-2 flex justify-center w-full scale-125">
        <button
          onClick={() => {
            const nextSection = document.getElementById("next-section");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
        >
          <ChevronsDown className="w-10 h-10 text-white/30 animate-bounce opacity-90" />
        </button>
      </div>

      {/* ✅ Inline CSS animations for float + glow */}
      <style>
        {`
          /* Floating Motion */
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          /* Glowing Aura */
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 25px rgba(255, 255, 255, 0.15),
                          0 0 45px rgba(196, 147, 255, 0.2);
            }
            50% {
              box-shadow: 0 0 35px rgba(255, 255, 255, 0.25),
                          0 0 60px rgba(196, 147, 255, 0.4);
            }
          }

          /* Combine float + glow */
          .animate-float-glow {
            animation: float 3s ease-in-out infinite, glow 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};
