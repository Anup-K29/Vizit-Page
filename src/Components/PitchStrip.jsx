import React from "react";
import { ChevronsDown } from "lucide-react";
import StarBorder from "./StarBorder.jsx";
import SplitText from "./SplitText.jsx";

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
        <SplitText
          as="h2"
          text={`The Professional, Secure,\nAnd Effortless Way To\nManage Every Visitor`}
           splitType = 'chars'

          className="block w-full text-center text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.4] whitespace-pre-wrap"
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