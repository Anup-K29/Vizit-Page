import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
import { AnnouncementBar } from "../Components/AnnouncementBar.jsx";
import Footer from "./Footer.jsx";

import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <AnnouncementBar />
      <NavBar />

      <main className="flex-1 pt-26">
        <Outlet />
      </main>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
