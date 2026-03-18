import React from "react";
const DefaultProps = ({ userName = "world" }) => {
  return (
    <div>
      {/* ! First way of default Props  */}
      {/* <h1>Hello {userName || "World"}</h1> */}
      <h1>Hello {userName}</h1>
    </div>
  );
};
export default DefaultProps;
