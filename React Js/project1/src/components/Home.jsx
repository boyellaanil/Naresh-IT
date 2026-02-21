import React from "react";
const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page of this React project.</p>
    </div>
  );
};
const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};
export default Home;