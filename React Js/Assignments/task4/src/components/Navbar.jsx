import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div>
      <Link to="/form">Register</Link>
      <Link to="/display">Display Data</Link>
    </div>
  );
};

export default Navbar;