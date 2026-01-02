import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar.jsx"
import Footer from "./Footer.jsx"

import React from 'react'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">

      <NavBar />
      
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <div className="">

      <Footer />
      </div>
    </div>
  )
}

export default Layout