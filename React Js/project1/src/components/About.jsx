import React from "react";
const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>
        This React project demonstrates basic components like Navbar, Footer,
        and multiple pages using functional components.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};
export default About;