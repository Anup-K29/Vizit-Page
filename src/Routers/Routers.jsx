import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import {Home} from "../Pages/Home.jsx"
import RegistrationForm from "../Form/RegistrationForm.jsx";
import { Features } from "@/Pages/Features";
import { Solutions } from "@/Pages/Solutions";



export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home/>}/>
            <Route path="features" element={<Features/>}/>
            <Route path="solutions" element={<Solutions/>}/>
            <Route path="registration-form" element={<RegistrationForm/>}/>
          </Route>
        
        </Routes>
      </Router>
    </>
  );
};
