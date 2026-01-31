
import CoworkingSpaceManagement from "../assets/images/SolutionPage/CoworkingSpaceManagement.webp";
import IntelligentQueueFlowManagement from "../assets/images/SolutionPage/IntelligentQueueFlowManagement.webp";
import SchoolCampusManagement from "../assets/images/SolutionPage/SchoolCampusManagement.webp";
import HospitalClinicManagement from "../assets/images/SolutionPage/HospitalClinicManagement.webp";
import HotelManagement from "../assets/images/SolutionPage/HotelManagement.webp";



import CoWorkngSpaceDetails from "../assets/images/SolutionPage/CoWorkngSpaceDetails.webp";
import QueueManagementDetails from "../assets/images/SolutionPage/QueueManagementDetails.webp";
import SchoolManagementDetails from "../assets/images/SolutionPage/SchoolManagementDetails.webp";
import HopitalManagementDetails from "../assets/images/SolutionPage/HopitalManagementDetails.webp";




export const solutionsData = [
  {
    id: 1,
    slug: "coworking-space-management",
    eyebrow: "All-in-One Coworking Software",
    title: "Coworking Space Management",
    description:
      "Manage your shared workspace with ease, from seamless QR code check-ins and member desk bookings to automated host notifications, meeting room scheduling, and mobile app access.",
    buttonText: "Read More",
    image: CoworkingSpaceManagement, detailsImage: CoWorkngSpaceDetails,

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
    detailsImage: QueueManagementDetails,

    details: {
      introHeading: "Turn Waiting into a Premium Experience for Guests",
      introSubtext:
        "Upgrade your lobby with automated queuing and real-time updates.",

      sections: [
        {
          heading: "The Psychology of the Wait",
          text: `We’ve all been there—standing in a crowded lobby, staring at a static number on a wall, wondering if we’ve been forgotten. For businesses, a physical queue isn't just a line; it’s a leak in customer satisfaction. "Intelligent Flow" is about more than just moving people; it’s about respecting their time`
        },
        {
          heading: "The Vizit Transformation",
          text: ` Vizit turns a static wait into a dynamic experience. By implementing virtual queuing, you allow your customers to "wait" on their own terms—whether that’s grabbing a coffee nearby or finishing an email. Real-time SMS updates keep them informed, while behind the scenes, our analytics dashboard gives your managers the "God-view" of your lobby. You’ll see peak times before they become problems, ensuring that your staff is always exactly where they need to be.`
        }
      ],

      features: [
        {
          title: "Virtual Queuing",
          desc: "Allow guests to join the queue digitally via a kiosk or mobile QR code. They can wait in a cafe or outside, receiving SMS updates when it’s their turn."
        },
        {
          title: "Dynamic Flow Routing",
          desc: "Automatically direct visitors to the right department or counter based on the purpose of their visit, reducing lobby congestion."
        },
        {
          title: "Live Performance Dashboards",
          desc: "Monitor average wait times and service durations in real-time, allowing managers to reallocate staff during peak surges."
        },
        {
          title: "Feedback Loops",
          desc: "Capture guest satisfaction immediately after their visit to ensure your service standards are consistently met."
        }

      ]
    }


  },
  {
    id: 3,
    slug: "school-campus-management",
    eyebrow: "All-in-One Education Software",
    title: "School & Campus Management",
    description:
      "Manage your educational institution with ease, from secure student pick-up verification and automated visitor watchlists to instant emergency roll call reporting, volunteer tracking, and mobile app access.",
    buttonText: "Read More",

    image: SchoolCampusManagement, detailsImage: SchoolManagementDetails,


    details: {
      introHeading: "Safety and Accountability for Modern Schools & Colleges",
      introSubtext:
        "Protecting your students and staff with automated, secure visitor oversight.",

      sections: [
        {
          heading: "Safety as a Foundation for Learning",
          text: `A school should be the safest place in a child’s life. Yet, traditional visitor logs are often incomplete, illegible, or easily bypassed. For administrators, the challenge is balancing a welcoming campus environment with the rigorous security protocols required in the modern world.`
        },
        {
          heading: "The Vizit Transformation",
          text: `From the moment a visitor steps onto campus, our system begins a silent, sophisticated verification process. Whether it’s cross-referencing watchlists or ensuring a student pick-up is authorized by the correct guardian. In the rare event of an emergency, the "instant roll-call" feature replaces the frantic paper-and-pen headcount with a precise, mobile-ready list of every soul on campus. We don't just manage visitors; we protect your community’s future. `
        }
      ],

      features: [
        {
          title: "Verified Student Pick-up",
          desc: "A secure, multi-factor verification system for guardians and authorized collectors to ensure students leave only with approved individuals."
        },
        {
          title: "Instant Watchlist Alerts",
          desc: "Our system cross-references visitors against custom watchlists, immediately alerting security personnel to unauthorized entries."
        },
        {
          title: "Digital Emergency Roll Call",
          desc: "In the event of an evacuation, generate an instant, mobile-accessible report of every student, staff member, and visitor on-site."
        },
        {
          title: "Volunteer & Vendor Tracking",
          desc: " Keep a clear log of third-party contractors and volunteers, including time-stamped entries and digital badge printing."
        }

      ]
    }
  },
  {
    id: 4, slug: "hospital-clinic-management",
    eyebrow: "All-in-One Healthcare Software",
    title: "Hospital & Clinic Management",
    description:
      "Manage every aspect of your medical facility with ease, from patient visitor tracking and digital health screenings to secure ward access control, real-time occupancy monitoring, and mobile app access.",
    buttonText: "Read More",

    image: HospitalClinicManagement, detailsImage: HopitalManagementDetails,


    details: {
      introHeading: "Prioritizing Patient Care through Streamlined Access",
      introSubtext:
        "Secure  & efficient visitor management for high-stakes environments.",

      sections: [
        {
          heading: "Efficiency in High-Stakes Environments ",
          text: `In a hospital, every second matters, and every interaction counts. Lobby congestion isn't just an inconvenience; it can be a health risk. Managing the flow of vendors, family members, and outpatients while maintaining HIPAA compliance and infection control is a monumental task for any medical facility.`
        },
        {
          heading: "The Vizit Transformation",
          text: `Vizit brings clinical precision to visitor management. Our healthcare-specific solution automates the "non-clinical" hurdles. Digital health screenings ensure that symptoms are caught before they reach the ward, while restricted access controls ensure that visitors only go where they are authorized. By removing the administrative burden from front-line staff, Vizit allows your healthcare heroes to keep their focus where it belongs: on patient outcomes and compassionate care. `
        }
      ],

      features: [
        {
          title: "Digital Health Screening",
          desc: "Automate health questionnaires and temperature checks at entry points to maintain a sterile and safe environment."
        },
        {
          title: "Sensitive Zone Access Control",
          desc: "Limit visitor access to specific wards or floors based on patient needs and hospital hours."
        },
        {
          title: "Real-time Occupancy Monitoring",
          desc: "Prevent overcrowding in waiting areas with automated alerts when capacity limits are approached."
        },
        {
          title: "HIPAA-Compliant Data",
          desc: "Rest easy knowing all visitor data is encrypted and stored in compliance with healthcare privacy regulations."
        }

      ]
    }
  },
  {
    id: 5, slug: "hotel-guest-management",
    eyebrow: "All-in-One Hospitality Software",
    title: "Hotel & Guest Management",
    description:
      "Streamline arrivals with digital registration, manage visitor access to amenities, provide instant staff notifications, and monitor lobby flow—all via a seamless mobile-integrated platform.",
    buttonText: "Read More",

    image: HotelManagement,

    details: {
      introHeading: "Elevating Guest Experiences through Seamless Arrivals",
      introSubtext:
        "Professional visitor management for premium hospitality environments.",

      sections: [
        {
          heading: "Digital Precision for Five-Star Hospitality",
          text: `In the hospitality industry, the first impression begins the moment a guest walks through your doors. A crowded lobby or a slow check-in process isn't just an operational bottleneck; it’s a missed opportunity to provide luxury service. Balancing the flow of guests and event attendees is a complex challenge for any modern hotel or resort.`
        },
        {
          heading: "The Vizit Transformation",
          text: `Vizit brings effortless elegance to guest management. Our hospitality-specific solution automates the "administrative" friction of the lobby. Digital pre-registration ensures that guests move quickly from the entrance to their rooms, while real-time staff notifications ensure your team is always ready to greet VIPs by name. By removing the manual burden from front-desk staff, Vizit allows your hospitality professionals to focus on creating memorable, five-star experiences for every guest. `
        }
      ],

      features: [
        {
          title: "Digital Pre-Registration",
          desc: "Enable guests to complete check-in forms and sign digital waivers via mobile before arrival to ensure a swift, touchless entry experience."
        },
        {
          title: "VIP & Staff Notifications",
          desc: "Instantly alert concierge or management teams when an expected VIP or event organizer checks in, ensuring personalized service every time."
        },
        {
          title: "Amenity Access Control",
          desc: "Manage and monitor guest access to restricted areas like executive lounges, spas, or gyms using secure, time-sensitive digital passes."
        },
        {
          title: "Vendor & Contractor Logs",
          desc: "Maintain a secure, time-stamped digital record of all third-party service providers and vendors entering the back-of-house or guest areas."
        }

      ]
    }
  },
];