import React from "react";
import { AdvancedFeaturesCards } from "./AdvancedFeaturesCards.jsx";
import Host_Notification_On_EntryExit from "../assets/images/FeaturesFolder/Host_Notification_On_EntryExit.png";
import Image_Capture_For_Authentication from "../assets/images/FeaturesFolder/Image_Capture_For_Authentication.png";
import Live_Visitor_Insights from "../assets/images/FeaturesFolder/Live_Visitor_Insights.png";
import Mandatory_Host_Approval from "../assets/images/FeaturesFolder/Mandatory_Host_Approval.png";
import Printed_Digital_Visitor_ID from "../assets/images/FeaturesFolder/Printed_Digital_Visitor_ID.png";
import QR_Based_Access_Control from "../assets/images/FeaturesFolder/QR_Based_Access_Control.png";
import Role_Based_Access from "../assets/images/FeaturesFolder/Role_Based_Access.png";
import Visitor_Data_Dashboard from "../assets/images/FeaturesFolder/Visitor_Data_Dashboard.png";
import Visitor_Feedback_Form from "../assets/images/FeaturesFolder/Visitor_Feedback_Form.png";

export const AdvancedFeaturesSection = () => {
  const advancedFeatureItems = [
    {
      title: `QR-Based Access`,
      description:
        "Enable fast, contactless entry and exit. Visitors scan a unique QR code on arrival, eliminating manual sign-in and creating an automatic, verifiable attendance log.",
      icon: QR_Based_Access_Control,
    },
    {
      title: "Image Capture",
      description:
        "Capture visitor photos during check-in for quick visual verification by security personnel. This process enhances security and aids in rapid identification on the premises.",

      icon: Image_Capture_For_Authentication,
    },
    {
      title: "Host Approval",
      description:
        "Require the assigned host to confirm the visit before the guest gains entry. This critical security step ensures all arrivals are expected, authorized, and managed properly.",

      icon: Mandatory_Host_Approval,
    },
    {
      title: "Dashboard",
      description:
        "View a real-time, graphical overview of all visitor activity. Track check-ins, measure peak hours, and analyze visit trends from one central, easy-to-read interface.",

      icon: Visitor_Data_Dashboard,
    },
    {
      title: "Host Notification",
      description:
        "Instantly alert hosts via email, SMS, or app when their guest arrives or departs. This automation streamlines the visitor pickup process and saves hosts valuable time.",

      icon: Host_Notification_On_EntryExit,
    },
    {
      title: "Visitor Feedback",
      description:
        "Automatically solicit quick, post-visit feedback on the experience, services, or facilities. Gather valuable data to help improve future visitor satisfaction and operations.",

      icon: Visitor_Feedback_Form,
    },
    {
      title: "Live Visitor Insights",
      description:
        "Monitor exactly who is currently on-site and their status in real time. Provides an immediate headcount and critical location data for security and emergency evacuation planning.",

      icon: Live_Visitor_Insights,
    },
    {
      title: "Role-Based Access",
      description:
        "Customize system access and permissions based on the user's role (e.g., administrator, security, host). This ensures data security by limiting users only to the functions they need.",

      icon: Role_Based_Access,
    },
    {
      title: "Digital Visitor ID",
      description:
        "Instantly generate professional visitor badges upon successful check-in. The ID can be printed or sent digitally to the visitor's mobile phone for quick, visible identification while on the premises.",

      icon: Printed_Digital_Visitor_ID,
    },
  ];

  return (
    <section className="bg-linear-to-b from-[#6730CF]  to-[#C493FF] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center text-white mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Unlock the Power of Data
        </h2>
        <p className="opacity-90 text-lg mt-2">
          Features that Transform Visitor Management into Real-Time Security
          Intelligence
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 place-items-start max-w-6xl mx-auto">
        {advancedFeatureItems.map((feature, index) => (
          <AdvancedFeaturesCards key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
