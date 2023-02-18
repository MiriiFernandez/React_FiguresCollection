import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => (
  <div className="navbar">
    <FaHome className="Iconos_navbar_home" />
    <FaCompass className="Iconos_navbar" />
    <FaBars className="Iconos_navbar" />
    <FaUserAlt className="Iconos_navbar" />
  </div>
);

export default Navbar;
