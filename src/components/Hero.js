import React from "react";

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:dhirajtaye01@gmail.com";
  };

  return (
    <div className="h-screen w-full lg:w-3/4 pb-8 lg:pb-32 flex flex-col justify-center items-start text-white px-6 lg:px-0">
      <h1 className="text-4xl lg:text-5xl mb-2 lg:mb-4 font-light">Hello</h1>
      <h2 className="text-4xl lg:text-5xl mb-2 lg:mb-4 font-light">I'm Dhiraj Taye</h2>
      <p className="w-full lg:w-2/3 mb-4 lg:mb-6 leading-7 text-base lg:text-lg">
        Hey there! 👋 I'm Dhiraj, a recent BTech Computer Science grad with a
        passion for creating meaningful digital experiences. During my journey,
        I've mastered React.js for crafting sleek and interactive user
        interfaces and delved into Node.js to build scalable backend solutions.
        Beyond coding, I'm an avid learner always seeking new challenges to
        push the boundaries of what's possible in tech. Let's connect and
        collaborate on exciting projects that leave a lasting impact!
      </p>
      <button
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
        onClick={handleContactClick}
      >
        Contact Me
      </button>
    </div>
  );
};

export default Hero;
