import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyReactApp</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "15px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
  logo: {
    margin: 0,
  },
};

export default Navbar;
