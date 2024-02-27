import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/nav";

const NavLinks = () => {
  const [active, setActive] = useState("")

  return (
    <ul className="flex gap-x-5 justify-evenly">
      {navLinks.map((link) => (
        <li onClick={() => setActive(link.name)} key={link.name} className={`${
          active == link.name ? 'text-black-200' : 'text-white'
        } hover:scale-105 hover:text-black-50 text-2xl transition-transform duration-150 ease-in`}>
          <Link to={`/${link.route}`}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  return (
    <header>
      <nav className="w-full justify-between fixed top-0 left-0  bg-black-900 backdrop-filter backdrop-blur-md bg-opacity-80 flex items-center px-4 py-2">
        <div className="px-6 py-2">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/hamburger.svg"
              alt="logo"
              className="w-10 sm:w-12 md:w-14 lg:w-18 h-auto hover:scale-110 transition-transform duration-200 ease-in"
            />
          </Link>
        </div>

        <div className="w-1/3">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;