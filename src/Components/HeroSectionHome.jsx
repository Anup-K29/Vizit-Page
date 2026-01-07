import React from "react";
import { NavLink } from "react-router-dom";
import { heroSlides } from "../DataObjects/HeroSectionHome.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

("LOGIC BEHIND THE HERO SECTION WITHOUT SWIPPER -- PREVIOUSLY USED CODE ");

// export const HeroSection = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroSlides.length);
//     }, 4000 );

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full pt-16 pb-20 px-6 overflow-hidden bg-white">
//       <div className="max-w-7xl mx-auto relative overflow-hidden">

//         {/* ===== SLIDES WRAPPER ===== */}
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {heroSlides.map((slide, index) => (
//             <div
//               key={index}
//               className="min-w-full  flex flex-col lg:flex-row gap-14 items-center"
//             >
//               {/* LEFT CONTENT */}
//               <div>

//                 <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#0f0f1a] mb-6">
//                   {slide.title}
//                 </h1>

//                 <p className="text-[#4b4b63] text-lg max-w-xl mb-10">
//                   {slide.description}
//                 </p>

//                 <NavLink
//                   to="/registration-form"
//                   className="inline-flex items-center gap-2 bg-[#AA60C8] text-white px-6 py-3 rounded-full font-medium"
//                 >
//                   Get Started →
//                 </NavLink>
//               </div>

//               {/* RIGHT IMAGE */}
//               <div className=" flex-1 flex justify-center lg:justify-end">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ===== DOTS ===== */}
//         <div className="flex justify-center gap-2 mt-10">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-all ${
//                 current === index
//                   ? "bg-[#6b5cff] scale-125"
//                   : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export const HeroSectionHome = () => {
  return (
    <section className="w-full pt-20 pb-20 px-6 bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        loop
        className="max-w-7xl mx-auto"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* ===== LEFT CONTENT ===== */}
              <div>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#0f0f1a] leading-tight mb-6">
                  {slide.title}
                </h1>
                {/* max-w-xl */}
                <p className="text-[#4b4b63] text-2xl leading-relaxed min-w-xl mb-10">
                  {slide.description}
                </p>

                <NavLink
                  to="/registration-form"
                  className="inline-flex items-center gap-2 bg-[white] text-[#AA60C8] px-6 py-3 rounded-full font-medium hover:opacity-90 transition border-2 border-[#AA60C8] hover:bg-[#AA60C8] hover:text-[white]"
                >
                  Get Started →
                </NavLink>
              </div>

              {/* ===== RIGHT IMAGE ===== */}
              <div className="relative flex justify-center lg:justify-end">
                <img src={slide.image} alt={slide.title} className="w-full " />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-pagination flex justify-center mt-18"></div>
    </section>
  );
};
