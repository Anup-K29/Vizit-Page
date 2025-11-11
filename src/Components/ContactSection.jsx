import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftCardRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Left Card Animation
    tl.fromTo(
      leftCardRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );



    // Animate form elements one by one (stagger)
    tl.fromTo(
      leftCardRef.current.querySelectorAll("input, button"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1, // delay between each element
      },
      "-=0.7" // starts slightly before card settles
    );



    // Right Card Animation
    tl.fromTo(
      rightCardRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.8" // starts slightly before left finishes
    );


    // Animate form elements one by one (stagger)
    tl.fromTo(
      rightCardRef.current.querySelectorAll("div"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1, // delay between each element
      },
      "-=0.5" // starts slightly before card settles
    );

  }, []);

  return (
    <section className="bg-[#b980fe] py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT CARD — Form (2/3 width) */}
        <div
          ref={leftCardRef}
          className="md:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-md"
        >
          <p className="text-black text-lg mb-6 leading-relaxed">
            <span className="text-[#5E17EB] font-medium">Vizit</span> can
            optimize work &amp; improve productivity by taking care of basic
            tasks. <span className="font-bold">Find out how!</span>
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-[#E5E5E5] text-black rounded-md px-4 py-2 w-full outline-none placeholder:text-gray-600"
              />
            </div>

            <button
              type="submit"
              className="bg-[#5E17EB] hover:bg-[#4C0FCC] text-white font-semibold px-8 py-2 rounded-full mt-2 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>


        {/* RIGHT CARD — Contact Info (1/3 width) */}
        <div
          ref={rightCardRef}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-center items-center text-center space-y-6"
        >
          <h3 className="text-lg font-semibold text-black">Contact Us</h3>
<div className="flex flex-col items-start gap-5">



          <div className="contact-item flex items-center gap-3 text-black">
            <Phone className="text-[#5E17EB] shrink-0" size={20} />
            <span className="text-base">+91 9560942419</span>
          </div>

          <div className="contact-item flex items-center gap-3 text-black">
            <Mail className="text-[#5E17EB] shrink-0" size={20} />
            <a
              href="mailto:vizit@nxiaappworld.com"
              className="underline text-base"
            >
              vizit@nxiaappworld.com
            </a>
          </div>

          <div className="contact-item flex items-start gap-3 text-black justify-center">
            <MapPin className="text-[#5E17EB] shrink-0 mt-1" size={20} />
            <p className="text-base text-left">
              Sector–10, Noida,
              <br />
              Uttar Pradesh–201301,
              <br />
              India
            </p>
          </div>
</div>
        </div>

      </div>
    </section>
  );
};
