import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "Believe you can and you're halfway there.",
];

const GridItem = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="grid grid-cols-1 text-2xl md:grid-cols-2 lg:grid-cols-4  gap-4 h-screen w-full lg:w-11/12 mx-auto ">
      {/* Skills Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-white bg-skills hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center  gap-4 lg:gap-8">
          <FontAwesomeIcon icon={faHtml5} size="3x" className="hover:text-orange-600" />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="hover:text-blue-600" />
          <FontAwesomeIcon icon={faJsSquare} size="3x" className="hover:text-yellow-300" />
          <FontAwesomeIcon icon={faReact} size="3x" className="hover:text-blue-400" />
          <FontAwesomeIcon icon={faNodeJs} size="3x" className="hover:text-green-400" />
        </div>
      </div>
      
      {/* LinkedIn Link */}
      <div className="flex items-center justify-center bg-white text-gray-600 hover:scale-105 transition-transform duration-300">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-blue-600 cursor-pointer" />
        <a href="https://www.linkedin.com/in/dhiraj-taye-946884193/" target="_blank" rel="noopener noreferrer" className="ml-2 text-xl md:text-2xl lg:text-3xl font-bold">LinkedIn</a>
      </div>
      
      {/* GitHub Link */}
      <div className="flex items-center justify-center bg-black text-white hover:scale-105 transition-transform duration-300">
        <FontAwesomeIcon icon={faGithub} size="3x" className="cursor-pointer"/>
        <a href="https://github.com/dhiraj-taye" target="_blank" rel="noopener noreferrer" className="ml-2 text-xl md:text-2xl lg:text-3xl font-bold">GitHub</a>
      </div>
      
      {/* Quotes Slider */}
      <div className="bg-green-600 text-white text-xl col-span-1 lg:col-span-2 row-span-1 flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300">
        <Slider {...settings} className="w-full">
          {quotes.map((quote, index) => (
            <div key={index} className="p-4">
              <p className="text-center italic">{quote}</p>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Resume Download */}
      <div className="bg-black col-span-1 row-span-1 flex flex-col justify-center items-center p-2 hover:scale-105 transition-transform duration-300">
        <FontAwesomeIcon icon={faFilePdf} className="text-white text-5xl cursor-pointer" />
        <a href="/resume.pdf" download className="mt-2 text-xl md:text-2xl lg:text-3xl text-white py-1 px-3 rounded">Resume</a>
      </div>
    </div>
  );
};

export default GridItem;
