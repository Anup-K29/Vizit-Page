
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProcessCards } from "./ProcessCards.jsx";

import userRegistration from "../assets/images/userRegistration.png";
import hostApproval from "../assets/images/hostApproval.png";
import qrAccess from "../assets/images/qrAccess.png";
import visitorCheckin from "../assets/images/visitorCheck-in.png";
import visitorFeedback from "../assets/images/visitorFeedback.png";

gsap.registerPlugin(ScrollTrigger);

export const ProcessSection = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);

  // useEffect(() => {
  //   // --- TEXT ANIMATION ---
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: "top 80%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   // Step 1: Heading
  //   tl.fromTo(
  //     headingRef.current,
  //     { opacity: 0, y: 60, scale: 0.98 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 1.2,
  //       ease: "power3.out",
  //     }
  //   );

  //   // Step 2: Subtitle
  //   tl.fromTo(
  //     subRef.current,
  //     { opacity: 0, y: 40 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     },
  //     "+=0.3"
  //   );

  //   // --- CARD ANIMATION ---
  //   gsap.fromTo(
  //     cardsRef.current,
  //     { opacity: 0, x: +100 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       stagger: 1, // delay between cards
  //       scrollTrigger: {
  //         trigger: cardsRef.current[0],
  //         start: "top 85%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);



//   useEffect(() => {
//   // --- TEXT ANIMATION ---
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: headingRef.current,
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//     },
//   });

//   // Heading
//   tl.fromTo(
//     headingRef.current,
//     { opacity: 0, y: 60, scale: 0.98 },
//     { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
//   );

//   // Subtitle
//   tl.fromTo(
//     subRef.current,
//     { opacity: 0, y: 40 },
//     { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//     "+=0.3"
//   );

//   // --- CARD ANIMATION WITH POP ---
//   gsap.fromTo(
//     cardsRef.current,
//     { opacity: 0, x: 100, scale: 0.9 },
//     {
//       opacity: 1,
//       x: 0,
//       scale: 1.05,
//       duration: 0.8,
//       ease: "power3.out",
//       stagger: 0.25,
//       scrollTrigger: {
//         trigger: cardsRef.current[0],
//         start: "top 85%",
//         toggleActions: "play none none reverse",
//       },
//       onComplete: () => {
//         // smooth settle back to 1.0 scale after appearing
//         gsap.to(cardsRef.current, {
//           scale: 1,
//           duration: 0.4,
//           ease: "power1.out",
//           stagger: 0.15,
//         });
//       },
//     }
//   );
// }, []);



useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // 1️⃣ Heading animation
  tl.fromTo(
    headingRef.current,
    { opacity: 0, y: 60, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    }
  );

  // 2️⃣ Subheading animation (after heading)
  tl.fromTo(
    subRef.current,
    { opacity: 0, y: 25 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "+=0.1" // short pause between them
  );

  // 3️⃣ Cards animation — runs after subheading
  tl.fromTo(
    cardsRef.current,
    { opacity: 0, x: 100, scale: 0.9 },
    {
      opacity: 1,
      x: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25, // each card one by one
      onComplete: () => {
        // smooth settle back to 1.0 scale after appearing
        gsap.to(cardsRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power1.out",
          stagger: 0.15,
        });
      },
    },
    "+=0.5" // delay after text finishes before cards start
  );
}, []);


  const steps = [
    {
      title: "User Registration",
      description:
        "Visitor fills a digital form at the front desk. Capturing their basic information along with a live picture and meeting details.",
      image: userRegistration,
    },
    {
      title: "Host Approval",
      description:
        "Host receives a notification upon visitor registration and decides to approve or deny their entry.",
      image: hostApproval,
    },
    {
      title: "QR-Based Access",
      description:
        "Upon approval, visitor receives a unique QR code usable for entry and exit during their visit.",
      image: qrAccess,
    },
    {
      title: "Visitor Check-In",
      description:
        "Visitor scans the QR code at entry and is greeted by the host, beginning the scheduled visit.",
      image: visitorCheckin,
    },
    {
      title: "Visitor Feedback",
      description:
        "After exit, visitor fills a quick feedback form to share their experience.",
      image: visitorFeedback,
    },
  ];

  return (
    <section
      id="next-section"
      className="bg-linear-to-b from-[#C493FF] to-[#6730CF] py-20 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <h2
          ref={headingRef}
          className="text-3xl font-bold md:text-6xl mb-5 opacity-0"
        >
          Seamless 5-Step Process
        </h2>

        {/* Animated Subtitle */}
        <p
          ref={subRef}
          className="text-2xl md:text-4xl opacity-90 mb-20 opacity-0"
        >
          Effortlessly Easy, Exceptionally Effective.
        </p>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="h-full"
            >
              <ProcessCards
                title={step.title}
                description={step.description}
                image={step.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
