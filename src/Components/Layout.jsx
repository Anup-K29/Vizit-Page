import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar.jsx"
import Footer from "./Footer.jsx"

import React from 'react'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <NavBar />
      <main className="flex-1 mt-16">
        <div>

        <Outlet />
        </div>

      </main>
      <div className="">

      <Footer />
      </div>
    </div>
  )
}

export default Layout