import React, { useState } from "react";
import { useGlobal } from "../context/AppContext";
import { FaCamera, FaBars, FaTimes } from "react-icons/fa";
import { Navbardata, socialIcons } from "../data/Navbardata";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colors } = useGlobal();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="w-full  px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCamera className="text-3xl text-green-500" />
          <h1 className="text-3xl font-bold">
            Photofolio
          </h1>
        </div>
        {/* Desktop Navbar */}
        <ul
          className={`hidden md:flex gap-6 text-lg font-semibold items-center ${colors.text}`}
        >
          {Navbardata.map((item, index) => {
            return (
              <li
                key={index}>
                 <Link
        to={item.link}
        className="cursor-pointer hover:text-green-500 duration-300"
      >
        {item.title}
      </Link>
              </li>
            );
          })}
        </ul>
        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Social Icons */}
          <ul
            className={`flex gap-4 text-2xl items-center ${colors.text}`}
          >
            {socialIcons.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-green-500 duration-300"
                >
                  {item.icon}
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <FaBars />
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 ${
            showMenu ? "right-0" : "-right-full"
          } w-[70%] h-screen bg-black text-white z-50 duration-300 md:hidden`}
        >

          {/* Close Icon */}
          <div className="flex justify-end p-6">
            <FaTimes
              className="text-3xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center gap-4 mt-10 text-2xl font-semibold">
            {Navbardata.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-green-500 duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;