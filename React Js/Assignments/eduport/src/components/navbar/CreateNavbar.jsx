import React from "react";
import { NavLink } from "react-router-dom";
const CreateNavbar = ({ data, removeId }) => {
  return (
    <div>
      <ul>
        {data.map((value) => {
          return (
            <li key={value.name}>
              {value.name === "Log Out" ? (
                <NavLink to={`${value.path}`} onClick={removeId}>
                  {value.name}
                </NavLink>
              ) : (
                <NavLink to={value.path}>{value.name}</NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CreateNavbar;