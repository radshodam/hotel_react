import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { eng } from "./resources/Resources";

export const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const handleToggle = () => {
    setIsopen(!isopen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isopen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">{eng.home}</Link>
          </li>
          <li>
            <Link to="/rooms">{eng.rooms}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
