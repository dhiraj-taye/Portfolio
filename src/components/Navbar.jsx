import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between text-md text-gray-400 py-4">
      <img className="w-16 cursor-pointer" src={assets.logo} alt="Dhiraj" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/projects">
          <li className="py-1">Projects</li>
          <hr className="border-none outline-none h-0.5 bg-green-200 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="">
       <p className="text-blue-500">dhirajtaye01@gmail.com</p>
      </div>
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden cursor-pointer absolute right-6 top-5"
        src={assets.menu_icon}
        alt="Menu Icon"
      />

      {/* ---------------- Mobile Menu ----------- */}

      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white tansition-all`}
      >
        <div className="flex items-center justify-between px-5">
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded full inline-block">HOME</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/projects">
            <p className="px-4 py-2 rounded full inline-block">PROJECTS</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
