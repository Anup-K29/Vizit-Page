import {Outlet} from "react-router-dom"
import {NavBar} from "./NavBar.jsx"
import Footer from "./Footer.jsx"

import React from 'react'

const Layout = () => {
  return (
   <div>
    <NavBar/>
    <Outlet/>
    <Footer/>


   </div>
  )
}

export default Layout