
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturesCards } from "./FeaturesCards.jsx";
import AdminDashboard from "../assets/images/AdminDashboard.png";
import ApprovalSysytem from "../assets/images/ApprovalSysytem.png";
import HostNotification from "../assets/images/HostNotification.png";
import ImageCapture from "../assets/images/ImageCapture.png";
import VisitorFeedBak from "../assets/images/VisitorFeedBak.png";
import QR_Entry_Exit from "../assets/images/QREntry-Exit.png";

gsap.registerPlugin(ScrollTrigger);

export const FeatureSection = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      "-=0.3"
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  const features = [
    { title: "QR Based Entry–Exit", icon: QR_Entry_Exit },
    { title: "Approval System", icon: ApprovalSysytem },
    { title: "Admin Dashboard", icon: AdminDashboard },
    { title: "Live Image Capture", icon: ImageCapture },
    { title: "Host Notification", icon: HostNotification },
    { title: "Visitor Feedback", icon: VisitorFeedBak },
  ];

  return (
    <section className="bg-linear-to-b from-[#6730CF] to-[#C493FF] py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headings */}
        <p ref={headingRef} className="text-3xl opacity-90 mb-2">
          An Automation Solution To Manage All Your Visitors
        </p>
        <h2 ref={subRef} className="text-2xl md:text-3xl font-semibold mb-30">
          Improving Safety & Enhancing Productivity
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-22 gap-16">
          {features.map((feature, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <FeaturesCards {...feature} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#6730CF] px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 font-medium transition-all duration-300">
          See All Features
        </button>
      </div>
    </section>
  );
};
