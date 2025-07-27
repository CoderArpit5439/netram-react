import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../page/Home";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import NotFound from "../page/NotFound";
import AdLogin from "../page/admin/AdLogin";
import OpticalLanding from "../page/optical/OpticalLanding";
import HospitalLanding from "../page/hospital/HospitalLanding";

const PublicRoute = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login/admin" element={<AdLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/optical" element={<OpticalLanding />} />
        <Route path='/hospital' element={<HospitalLanding />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default PublicRoute;
