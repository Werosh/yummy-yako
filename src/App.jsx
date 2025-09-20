import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";

import Menu from "./MainPages/MenuPage";
import Event from "./MainPages/Events";
import Contact from "./MainPages/Contact";
import Career from "./MainPages/Career";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
