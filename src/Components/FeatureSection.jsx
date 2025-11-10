import React from "react";
import {FeaturesCards} from "./FeaturesCards.jsx";
import AdminDashboard from "../assets/images/AdminDashboard.png";
import ApprovalSysytem from "../assets/images/ApprovalSysytem.png";
import HostNotification from "../assets/images/HostNotification.png";
import ImageCapture from "../assets/images/ImageCapture.png";
import VisitorFeedBak from "../assets/images/VisitorFeedBak.png";
import QR_Entry_Exit from "../assets/images/QREntry-Exit.png";

export const FeatureSection = () => {
  const features = [
    { title: "QR Based Entry–Exit", icon: QR_Entry_Exit },
    { title: "Approval System", icon: ApprovalSysytem },
    { title: "Admin Dashboard", icon: AdminDashboard },
    { title: "Live Image Capture", icon: ImageCapture },
    { title: "Host Notification", icon: HostNotification },
    { title: "Visitor Feedback", icon: VisitorFeedBak },
  ];

  return (<>
  <section className="bg-linear-to-b from-[#6730CF] to-[#C493FF] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headings */}
        <p className="text-white text-3xl opacity-90 mb-2">
          An Automation Solution To Manage All Your Visitors
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-30">
          Improving Safety & Enhancing Productivity
        </h2>

        {/* Feature Grid
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-12
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-22 gap-16">
          {features.map((feature, index) => (
            <FeaturesCards key={index} {...feature} />
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#6730CF] px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 font-medium transition-all duration-300">
          See All Features
        </button>
      </div>
    </section>
  </>)
};
