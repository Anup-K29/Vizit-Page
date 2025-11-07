import React from "react";
import { ChevronsDown } from "lucide-react";
import StarBorder from "./StarBorder.jsx";

export const PitchStrip = () => {
  return (
    <section
      className="min-h-[85vh] flex items-center justify-center px-6"
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, #6730CF 19.23%, #7037DB 34.62%, #C493FF 98.56%)`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center mt-38">
        <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight md:leading-[1.2]">
          The Professional, Secure,
          <br />
          And Effortless Way To
          <br />
          Manage Every Visitor
        </h2>

        <StarBorder
          className="mt-22 px-10 py-4 rounded-full text-white font-semibold text-lg bg-linear-to-r from-[#C493FF] to-[#6730CF] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
        >
          Free Demo
        </StarBorder>

        <div className="mt-16 flex justify-center scale-125">
          <button onClick={()=>{
            const nextSection=document.getElementById("next-section");

            nextSection?.scrollIntoView({behavior:"smooth"})
          }} 
          className="mt-3 cursor-pointer">
            
          <ChevronsDown className="w-10 h-10 text-white/30 mt-3 animate-bounce opacity-90" />
          </button>
        </div>
      </div>
    </section>
  );
};
