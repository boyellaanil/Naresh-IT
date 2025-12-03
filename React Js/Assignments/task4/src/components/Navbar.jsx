import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/displaydata">Display Data</Link>
    </div>
  );
};

export default Navbar;