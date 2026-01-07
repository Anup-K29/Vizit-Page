import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {Home} from "../Pages/Home.jsx"
import RegistrationForm from "../Form/RegistrationForm.jsx";
import { Features } from "@/Pages/Features";



export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home/>}/>
            <Route path="registration-form" element={<RegistrationForm/>}/>
            <Route path="features" element={<Features/>}/>
          </Route>
        
        </Routes>
      </Router>
    </>
  );
};
