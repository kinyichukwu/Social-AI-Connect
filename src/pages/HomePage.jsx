import React from "react";
import NavBar from "../components/NavBar.component";
import HomePageNavBar from "../components/OnboardingPage/HomePageNavBar.component";
import WelocomeBanner from "../components/OnboardingPage/WelcomeBanner.component";
import AddBrand from "../components/OnboardingPage/AddBrand.component";
import { Routes, Route } from "react-router-dom";
import AddBrandForm from "../components/OnboardingPage/AddbrandForm";
import AddSocialMedia from "../components/OnboardingPage/AddSocialMedia";
const HomePage = () => {
  return (
    <div className="bg-[#F8F8FF]">
      <NavBar />
      <WelocomeBanner />
      <Routes>
        <Route path="/" element={<AddBrand />} />
        <Route path="/addbrandform" element={<AddBrandForm />} />
        <Route path="/addsocialmedia" element={<AddSocialMedia />} />
      </Routes>
    </div>
  );
};

export default HomePage;
