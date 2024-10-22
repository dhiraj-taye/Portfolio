import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import GridItem from "./GridItem";
import Footer from "./Footer";
import Projects from "./Projects";

const Page = () => {
  
  return (
    <div className=" bg-gray-700 flex flex-col items-center mt-0">
      <Header />
      <Hero />
      <GridItem />
      <Projects />
      <Footer />
    </div>
  );
};

export default Page;
