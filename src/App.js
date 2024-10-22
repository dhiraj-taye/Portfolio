import React from "react";
import Hero from "./components/Hero";
import GridItem from "./components/GridItem";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
