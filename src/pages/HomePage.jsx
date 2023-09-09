import React from "react";
import NavBar from "../components/NavBar.component";
import HomePageNavBar from "../components/HomePageNavBar.component";
import WelocomeBanner from "../components/WelcomeBanner.component";
import AddBrand from "../components/AddBrand.component";
const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <WelocomeBanner></WelocomeBanner>
      <AddBrand></AddBrand>
    </div>
  );
};

export default HomePage;
