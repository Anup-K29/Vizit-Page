import React from "react";
import { ProcessCards } from "./ProcessCards.jsx";

import userRegistration from "../assets/images/userRegistration.png";
import hostApproval from "../assets/images/hostApproval.png";
import qrAccess from "../assets/images/qrAccess.png";
import visitorCheckin from "../assets/images/visitorCheck-in.png";
import visitorFeedback from "../assets/images/visitorFeedback.png";

export const ProcessSection = () => {
  const steps = [
    {
      title: "User Registration",
      description:"Visitor fills a digital form at the front desk. Capturing their basic information along with a live picture and meeting details.",
      image: userRegistration,
    },
    {
      title: "Host Approval",
      description:"Host receives a notification upon visitor registration and decides to approve or deny their entry.",
      image: hostApproval,
    },
    {
      title: "QR-Based Access",
      description:"Upon approval, visitor receives a unique QR code usable for entry and exit during their visit.",
      image: qrAccess,
    },
    {
      title: "Visitor Check-In",
      description:"Visitor scans the QR code at entry and is greeted by the host, beginning the scheduled visit.",
      image: visitorCheckin,
    },
    {
      title: "Visitor Feedback",
      description:"After exit, visitor fills a quick feedback form to share their experience.",
      image: visitorFeedback,
    },
  ];
  return (
    <>
      <section className="bg-linear-to-b from-[#C493FF] to-[#6730CF] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
         
          <h2 className="text-3xl font-bold md:text-5xl font mb-5">
            Seamless 5-Step Process
          </h2>
          <p className="text-3xl opacity-90 mb-20">
            Effortlessly Easy, Exceptionally Effective.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <ProcessCards
                key={index}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
