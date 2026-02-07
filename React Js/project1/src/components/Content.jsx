import React from "react";

const Content = () => {
  return (
    <section style={styles.container}>
      <h1>Welcome to My React Project</h1>
      <p>
        This is a simple React.js project containing a navbar, footer, and
        content section. You can expand this project with  context API,
        APIs, forms, and more.
      </p>
    </section>
  );
};
const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Content;