



// import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/images/vizit-logo.png";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "Features", path: "/features" },
//   { label: "Use Cases", path: "/use-cases" },
//   { label: "Pricing", path: "/pricing" },
// ];

// export const NavBar = () => {
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "text-[#6730CF] font-semibold"
//       : "text-[#6730CF] hover:opacity-80 transition";

//   return (
//     <header className="w-full bg-[#f9f9fb] border-b border-[#d1c4e9]">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <NavLink to="/">
//             <img className="w-20" src={Logo} alt="logo" />
//           </NavLink>
//         </div>

//         {/* Center Links */}
//         <ul className="hidden md:flex items-center gap-10">
//           {navItems.map(({ label, path }) => (
//             <li key={path}>
//               <NavLink to={path} className={linkClass} end={path === "/"}>
//                 {label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Right Button */}
//         <NavLink
//           to="/login"
//           className="px-5 py-2 rounded-full border border-[#6730CF] text-[#6730CF] hover:bg-[#6730CF] hover:text-white transition"
//         >
//           Login
//         </NavLink>
//       </nav>
//     </header>
//   );
// };






import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/vizit-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Use Cases", path: "/use-cases" },
  { label: "Pricing", path: "/pricing" },
];

export const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `relative text-[15px] font-medium transition-all duration-300 pb-1 
     ${
       isActive
         ? "text-[#6730CF] font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#6730CF] after:to-[#A34EFF] after:rounded-full"
         : "text-[#6730CF] opacity-80 hover:opacity-100 after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-[#6730CF] after:to-[#A34EFF] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
     }`;

  return (
    <header className="w-full bg-[#f9f9fb] border-b border-[#d1c4e9]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-20" src={Logo} alt="logo" />
          </NavLink>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink to={path} className={linkClass} end={path === "/"}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <NavLink
          to="/login"
          className="px-5 py-2 rounded-full border border-[#6730CF] text-[#6730CF] text-[15px] font-medium hover:bg-[#6730CF] hover:text-white transition-all duration-300"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};
