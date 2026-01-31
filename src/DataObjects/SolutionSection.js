
import CoworkingSpaceManagement from "../assets/images/SolutionPage/CoworkingSpaceManagement.webp";
import IntelligentQueueFlowManagement from "../assets/images/SolutionPage/IntelligentQueueFlowManagement.webp";
import SchoolCampusManagement from "../assets/images/SolutionPage/SchoolCampusManagement.webp";
import HospitalClinicManagement from "../assets/images/SolutionPage/HospitalClinicManagement.webp";
import HotelManagement from "../assets/images/SolutionPage/HotelManagement.webp";


export const solutionsData = [
  {
    id: 1,
    slug: "coworking-space-management",
    eyebrow: "All-in-One Coworking Software",
    title: "Coworking Space Management",
    description:
      "Manage your shared workspace with ease, from seamless QR code check-ins and member desk bookings to automated host notifications, meeting room scheduling, and mobile app access.",
    buttonText: "Read More",
    image: CoworkingSpaceManagement,
    details: {
      introHeading: "Empower Your Space with Frictionless Operations",
      introSubtext:
        "Focus on hospitality while Vizit handles the logistics of your shared workspace.",

      sections: [
        {
          heading: "The Modern Workspace Experience",
          text: `The magic of a coworking space isn't just the high-speed internet or the free coffee; it’s the community. However, community growth often brings operational friction. When a community manager is buried under a mountain of manual check-ins, guest registrations, and "Who booked the boardroom?" disputes, the human connection is lost.`
        },
        {
          heading: "The Vizit Transformation",
          text: `With Vizit, the "front desk" becomes a bridge rather than a barrier. Imagine a member walking in, scanning a QR code, and having their host notified instantly via Slack. No paper logs, no awkward waiting. Our Coworking Management suite automates the "boring stuff"—billing, desk allocation, and meeting room schedules—allowing your team to get back to what they do best: fostering collaboration and growing your brand. `
        }
      ],

      features: [
        {
          title: "Member-First Check-ins",
          desc: "Give your members the autonomy they crave. Seamless QR-code entries and instant host notifications mean no one is left waiting at the front desk."
        },
        {
          title: "Smart Desk & Room Scheduling",
          desc: "An intuitive interface for booking meeting rooms or hot desks in real-time, preventing double-bookings and optimizing space utility."
        },
        {
          title: "Integrated Billing & Analytics",
          desc: "Automatically track space usage to simplify invoicing and gain insights into peak hours and popular amenities."
        },
        {
          title: "Mobile App Access",
          desc: "A white-labeled experience that puts your co-working community in the palm of your members' hands."
        }

      ]
    }
  },


  {
    id: 2,
    slug: "intelligent-queue-flow-management",
    eyebrow: "Smart Visitor Management System",
    title: "Intelligent Queue & Flow Management",
    description:
      "Eliminate lobby congestion with automated queuing. QR check-ins and real-time updates ensure a seamless, professional entry experience for both guests and staff.",
    buttonText: "Read More",
    image: IntelligentQueueFlowManagement,

    
  },
  {
    id: 3,
    slug: "school-campus-management",
    eyebrow: "All-in-One Education Software",
    title: "School & Campus Management",
    description:
      "Manage your educational institution with ease, from secure student pick-up verification and automated visitor watchlists to instant emergency roll call reporting, volunteer tracking, and mobile app access.",
    buttonText: "Read More",

    image: SchoolCampusManagement,
  },
  {
    id: 4, slug: "hospital-clinic-management",
    eyebrow: "All-in-One Healthcare Software",
    title: "Hospital & Clinic Management",
    description:
      "Manage every aspect of your medical facility with ease, from patient visitor tracking and digital health screenings to secure ward access control, real-time occupancy monitoring, and mobile app access.",
    buttonText: "Read More",

    image: HospitalClinicManagement,
  },
  {
    id: 5, slug: "hotel-guest-management",
    eyebrow: "All-in-One Hospitality Software",
    title: "Hotel & Guest Management",
    description:
      "Streamline arrivals with digital registration, manage visitor access to amenities, provide instant staff notifications, and monitor lobby flow—all via a seamless mobile-integrated platform.",
    buttonText: "Read More",

    image: HotelManagement,
  },
];