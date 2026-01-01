import React, { useState } from "react";

const Form = ({ data, handleChange, handleSubmit }) => {
  return (
    <>
      <form action=""onSubmit={handleSubmit}>
        {data.map((value) => {
          return (
            <article key={value.name}>
              <label htmlFor="">{value.name}</label>
              <input type={value.type} name={value.name} value={value.value} onChange={handleChange}/>
            </article>
          );
        })}
      </form>
    </>
  );
};

export default Form;
