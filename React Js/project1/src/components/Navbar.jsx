import React from "react";
const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyReactApp</h2>

      <ul style={styles.menu}>
        <a href="components/Home.jsx"style={styles.item}>Home</a>
        <a href="./About.jsx" style={styles.item}>About</a>
        <a href="./Contact.jsx"style={styles.item}>Contact</a>
         <a href="./Login.jsx" style={styles.item}>Login</a>
        <a href="./Register.jsx"style={styles.item}>Register</a>
      </ul>
    </nav>
  );
};
const styles = {
  nav: {
    backgroundColor: "#222",
    padding: "15px 40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
  },
  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
  },
  item: {
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.3s",
  },
};
export default Navbar;