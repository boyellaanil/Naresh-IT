import React from "react";
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 MyReactApp. All Rights Reserved.</p>
    </footer>
  );
};
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};
export default Footer;