import React from "react";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Location from "./Location";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <Location />
      <About />
      <Menu />
    </div>
  );
};

export default LandingPage;
