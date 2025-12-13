import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {Home} from "../Pages/Home.jsx"
import {Features} from "../Pages/Features.jsx"
import {UseCases} from "../Pages/Use-Cases.jsx"
import {Pricing} from "../Pages/Pricing.jsx"
import RegistrationForm from "../Form/RegistrationForm.jsx";


export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home/>}/>
            <Route path="features" element ={<Features/>} />
            <Route path="use-cases" element ={<UseCases/>}/>
            {/* <Route path="pricing" element={<Pricing/>}/> */}
            <Route path="registration-form" element={<RegistrationForm/>}/>
          </Route>
        
        </Routes>
      </Router>
    </>
  );
};
