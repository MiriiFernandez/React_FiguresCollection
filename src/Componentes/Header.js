import { useEffect, useState } from "react";
import logo from "../img/logofc.png";
import { FaSistrix } from "react-icons/fa";

const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" />
    <form className="input_header">
      <label>
        <input className="buscador"></input>
         <FaSistrix size={30}></FaSistrix>
      </label>
    </form>
  </div>
);

export default Header;
