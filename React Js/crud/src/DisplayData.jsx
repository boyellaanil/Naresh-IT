import React from "react";

const DisplayData = ({ details, handleEdit, handleDelete }) => {
  return (
    <div>
      {details.map((value) => {
        return (
          <article>
            <p>Product Name: {value.productName}</p>
            <p>Product Price: {value.productPrice}</p>
            <p>Product Description: {value.productDescription}</p>
            <aside>
              <button
                onClick={() => {
                  handleEdit(value);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(value)}>Delete</button>
            </aside>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayData;
