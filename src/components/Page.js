import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import GridItem from "./GridItem";
import Footer from "./Footer";
import Projects from "./Projects";

const Page = () => {
  const projects = [
    {
      title: "SecureAuth",
      description:
        "A comprehensive full-stack authentication solution ensuring secure and efficient user management.",
      imageUrl: "secureauth.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      url: "https://secure-auth-alpha.vercel.app/", // Replace with actual URL
    },
    {
      title: "Travel wise",
      description: "AI powered Trip Planner",
      imageUrl: "banner.png", // Replace with actual image URL
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Hugging Face GPT-Neo mode",
        "Integrated Google Maps API",
      ],
      url: "https://travelwise.example.com", // Replace with actual URL
    },
    // Add more projects here
  ];

  return (
    <div className=" bg-gray-700 flex flex-col items-center mt-0">
      <Header />
      <Hero />
      <GridItem />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default Page;
