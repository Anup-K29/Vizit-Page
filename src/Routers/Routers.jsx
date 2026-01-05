import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {Home} from "../Pages/Home.jsx"
// import {Features} from "../Pages/Features.jsx"
// import {UseCases} from "../Pages/Use-Cases.jsx"
// import {Pricing} from "../Pages/Pricing.jsx"
import RegistrationForm from "../Form/RegistrationForm.jsx";
// import SignINControl from "../Pages/SignINControl.jsx"
// import { PrintedPass } from "@/Pages/PrintedPass";
// import { CustomVisitorEntry } from "@/Pages/CustomVisitorEntry";
// import { VisitorManagement } from "@/Pages/VisitorManagement";


export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home/>}/>
            {/* <Route path="features/sign-in-control" element={<SignINControl/>}/>
            <Route path="features/custom-entry" element={<CustomVisitorEntry/>}/>
            <Route path="features/printed-passes" element={<PrintedPass/>}/>
            <Route path="features/visitor-management" element={<VisitorManagement/>}/> */}
            <Route path="registration-form" element={<RegistrationForm/>}/>
          </Route>
        
        </Routes>
      </Router>
    </>
  );
};
