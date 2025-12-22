import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/vizit-logo.png";

const navItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Features",
    // path: "/features",
    dropdown: [
      { label: "Sign-in & Control", path: "/features/sign-in-control" },
      { label: "Custom Visitor Entry", path: "/features/custom-entry" },
      { label: "Managing Documents", path: "/features/managing-documents" },
      { label: "File Reporting", path: "/features/file-reporting" },
      { label: "Prebooking Guest", path: "/features/prebooking-guest" },
      { label: "Printed Passes", path: "/features/printed-passes" },
      { label: "Site Inductions", path: "/features/site-inductions" },
      { label: "Visitor Management", path: "/features/visitor-management" },

    ],
  },
  {
    label: "Industries",
    dropdown: [
      { label: "Events", path: "/features/events" },
      { label: "Manufacturing", path: "/features/manufacturing" },
      { label: "People", path: "/features/people" },
      { label: "Workplace", path: "/features/workplace" },
      { label: "Schools", path: "/features/schools" },

    ],
    //  path: "/use-cases"
  },
  // { label: "Pricing", path: "/pricing" },
];

export const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors duration-200
   ${isActive ? "text-[#6730CF]" : "text-black hover:text-[#6730CF]"}`;

  return (
    <header className="w-full bg-[#f9f9fb] border-b border-[#d1c4e9] fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-20" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {/* Main Nav Link */}
  
              <NavLink
                     to={item.path}
                // className={linkClass}
                className={`${linkClass} flex items-center gap-1`}
                end={item.path === "/"}
              >
                {item.label}
                {item.dropdown && (
                  <span className="text-xs text-gray-500 transition-transform group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </NavLink>

              {/* Dropdown */}

              {item.dropdown && (
                <div
                  className="
      absolute left-0 top-full mt-3
      w-64 bg-white
      rounded-lg shadow-xl
      border border-gray-200
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
      z-50
    "
                >
                  <ul className="py-2">
                    {item.dropdown.map((sub, index) => (
                      <li
                        key={sub.path}
                        className={`${
                          index !== item.dropdown.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        <NavLink
                          to={sub.path}
                          className="
              block px-5 py-3 text-sm
              text-black
              hover:bg-gray-50
              hover:text-[#6730CF]
              transition
            "
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://vizit.nxiappworld.com/"
            target="_blank"
            className="px-5 py-2 rounded-full border border-[#6730CF] text-[#6730CF] text-[15px] font-medium hover:bg-[#6730CF] hover:text-white transition-all duration-300"
          >
            Login
          </a>

          <NavLink
            to="/registration-form"
            className="px-5 py-2 rounded-full border border-[#6730CF] text-white bg-[#6730CF] text-[15px] font-medium hover:bg-white hover:text-[#6730CF] transition-all duration-300"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
