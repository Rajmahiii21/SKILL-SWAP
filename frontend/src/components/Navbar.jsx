import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SkillSwap</div>
      <ul className="navbar-links">
        <li><Link to="/">Browse</Link></li>
        <li><Link to="/">How it Works</Link></li>
        <li><Link to="/">Community</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/login" className="btn login-btn">Log In</Link>
        <Link to="/register" className="btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
