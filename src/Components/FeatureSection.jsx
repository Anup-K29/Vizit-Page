import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import RightArrow from "../assets/images/HomePage/RightArrow.png";
import LeftArrow from "../assets/images/HomePage/LeftArrow.png";

import { features } from "../DataObjects/FeatureSection.js";

export const FeaturesSection = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  // ---------- AUTOPLAY ----------
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 1800);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    //px-6 py-24
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-40 text-center">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          What Does Vizit Do?
        </h2>

        {/* COVERFLOW WHEEL */}
        <div
          className="relative h-[420px] flex items-center justify-center"
          style={{ perspective: "1200px" }} //1200px
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          {features.map((feature, index) => {
            const total = features.length;

            // --------- CIRCULAR OFFSET (KEY PART) ---------
            let offset = index - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            // hide far cards
            if (Math.abs(offset) > 1) return null;

            const translateX = offset * 260;
            const scale =
              offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7;

            // const opacity =
            //   offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3;
            // const blur = offset === 0 ? "blur(0px)" : "blur(4px)";

            let opacity = 1;
            let blur = "blur(0px)";

            if (Math.abs(offset) === 1) {
              opacity = 0.47; // just behind → opacity only
            }

            // if (Math.abs(offset) === 2) {
            //   opacity = 0.35; // further behind
            //   blur = "blur(2px)"; // blur only here
            // }

            const zIndex = 30 - Math.abs(offset) * 10;

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${
                    offset * +30
                  }deg)`, //12
                  opacity,
                  filter: blur,
                  zIndex,
                }}
              >
                <div className="bg-white border-[#AA60C8] border-b-4 border-t-4 rounded-3xl p-8 w-65 shadow-2xl">
                  {/* IMAGE */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-76"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#AA60C8] mb-3">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION – ONLY CENTER */}
                  {Math.abs(offset) <= 1 && (
                    <p className="text-[#4b4b63] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* LEFT CONTROL */}
          <button
            onClick={() =>
              setActive((prev) => (prev === 0 ? features.length - 1 : prev - 1))
            }
            className="absolute left-0 w-12 h-12 flex items-center justify-center text-xl hover:scale-110 transition z-50 cursor-pointer"
          >
            <img src={LeftArrow} alt="" />
          </button>

          {/* RIGHT CONTROL */}
          <button
            onClick={() => setActive((prev) => (prev + 1) % features.length)}
            className="absolute right-0 w-12 h-12  flex items-center justify-center text-xl hover:scale-110 transition z-50 cursor-pointer"
          >
            <img src={RightArrow} alt="" />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <NavLink
            to="/features"
            className="inline-flex items-center rounded-full gap-2 border-2 border-[#AA60C8] text-[#AA60C8] font-medium hover:gap-3 transition-all px-4 py-2 hover:bg-[#AA60C8] hover:text-white"
          >
            See All Features →
          </NavLink>
        </div>
      </div>
    </section>
  );
};
