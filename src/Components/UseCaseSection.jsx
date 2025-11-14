// UseCasePage.jsx
import React from "react";
import UseCaseCard from "./UseCaseCards.jsx";

import HealthcareFacility from "../assets/images/UseCaseFolder/HealthcareFacility.jpg";
import DataCenterSecurity from "../assets/images/UseCaseFolder/DataCenterSecurity.jpg";
import LuxuryResidential from "../assets/images/UseCaseFolder/LuxuryResidential.jpg";
import SplitText from "./SplitText.jsx";
import BlurText from "./BlurText.jsx";


const UseCaseSection = () => {
  const useCases = [
    {
      image: HealthcareFacility,
      title: "Healthcare Facility Center",
      features: [
        {
          heading: "Infection Control",
          desc1: "Custom Check-in Questions & Pre-registration: Requires visitors to answer mandatory health screening questions (e.g., travel history, fever symptoms) before a pass is issued.",
          desc2: "Reduces the spread of illness within a sensitive environment, protecting vulnerable patients and staff.."
        },
        {
          heading: "Patient Privacy (HIPAA)",
          desc1: "Host Approval & Role-Based Access: Forces host/department approval and ensures visitors are only directed to the correct floor/wing, preventing unauthorized access to patient areas.",
          desc2: "Maintains regulatory compliance by securing sensitive patient data and restricting casual visitors to non-public areas.   "
        },
        {
          heading: "Rapid Tracking & Security",
          desc1: "Live Visitor Insights & Digital ID: Provides security with a real-time list of all non-staff visitors. The Digital ID allows staff to quickly identify vendors vs. family members.",
          desc2: "Enables immediate lockdown/alert procedures and helps security know instantly who is in the building during a crisis or unauthorized area breach."
        }
      ],
    },

    {
      image: DataCenterSecurity,
      title: "Data Center Security & Auditing",
      features: [
        {
          heading: "Zero Tolerance Access",
          desc1: "Image Capture & QR-Based Access: Compares the live check-in photo with the pre-registered photo and ties the access credential (QR code) to that single, verified identity.",
          desc2: "Prevents tailgating and unauthorized credential use, ensuring only the intended individual gains entry to highly restricted server floors."
        },
        {
          heading: "Change Control Audit",
          desc1: `Dashboard & Host Approval: Captures detailed records of every visit (start time, exit time, host technician) and documents the purpose (e.g., "Server rack 4B maintenance").`,
          desc2: "Provides a tamper-proof, legally defensible audit trail required for certifications like ISO 27001 or SOC 2 compliance."
        },
        {
          heading: "Escorting & Monitoring",
          desc1: "Host Notification & Live Visitor Insights: Notifies the designated escort immediately upon arrival, and the system tracks the check-in/out status, ensuring contractors are never left unescorted beyond the lobby.",
          desc2: "Reduces risk of insider threats or accidental damage by enforcing a strict chain of custody and supervision for external vendors."
        }
      ],
    },

    {
      image: LuxuryResidential,
      title: "Luxury Residential Communities",
      features: [
        {
          heading: "Resident Security",
          desc1: "Host Approval (Resident-Driven): The guard uses the VMS to instantly contact the resident. The resident must approve the visitor before the system allows the pass to be issued.",
          desc2: "Puts access control in the hands of the resident, ensuring privacy and preventing uninvited solicitors from entering the community."
        },
        {
          heading: "Delivery & Service Flow",
          desc1: "QR-Based Access & Digital ID (for repeat visitors): Creates pre-approved entries for frequent staff (cleaners, nannies) and package delivery drivers with a quick scan.",
          desc2: "Eliminates traffic build-up at the gate and speeds up essential service entry without sacrificing security or verification."
        },
        {
          heading: "Incident Review",
          desc1: "Image Capture & Dashboard: Logs a photo of every visitor and vehicle driver, along with their check-in time and host resident.",
          desc2: "Provides a comprehensive record for security investigations following a reported incident (e.g., a break-in or property damage)."
        }
      ],
    }
  ];

  return (
    <div className="max-w-full mx-auto px-6 py-12 flex flex-col gap-12"
      style={{
        background: "linear-gradient(135deg, #6730CF 0%, #7037DB 50%, #C493FF 100%)"
      }}>

      {/* 🔥 SECTION HEADING */}
      <SplitText text="    Vizit enhances security, ensures compliance, and optimizes 
        the front desk experience across various industries."
         splitType = 'lines'
        className="text-center text-white text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-snug" />

      {useCases.map((item, index) => (
        <UseCaseCard key={index} {...item} />
      ))}
    </div>
  );
};

export default UseCaseSection;
