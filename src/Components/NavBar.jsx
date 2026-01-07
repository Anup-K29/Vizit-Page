import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/vizit-logo.png";

const navItems = [
  {label:"Home",path:"/"},
  { label: "Features", path: "/features" },
  { label: "Solutions", path: "/solutions" },
  // { label: "Pricing", path: "/pricing" },
];

export const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors duration-200
   ${isActive ? "text-[#6730CF]" : "text-black hover:text-[#6730CF]"}`;

  return (
    <header
      className="
      w-full fixed top-9 left-0 z-50
      bg-white/70 backdrop-blur-md
      border-b border-[#d1c4e9] opacity-90 shadow-md
    "
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img className="w-20" src={Logo} alt="logo" />
        </NavLink>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#AA60C8]"
                      : "text-black hover:text-[#AA60C8]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://vizit.nxiappworld.com/"
            target="_blank"
            className="px-5 py-2 rounded-full border-2 border-[#AA60C8] text-[#AA60C8] text-[15px] font-medium hover:bg-[#AA60C8] hover:text-white transition-all shadow-lg "
          >
            Login
          </a>

          <NavLink
            to="/registration-form"
            className="px-5 py-2 rounded-full bg-[#AA60C8] text-white text-[15px] font-medium hover:bg-white hover:text-[#AA60C8] border-2 border-[#AA60C8] transition-all shadow-lg"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
