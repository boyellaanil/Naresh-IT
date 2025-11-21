import React from 'react'

const DisplayData = ({details}) => {
  return (
    <div>
       {details.map((value) => {
        return (
          <article>
            <p>Product Name: {value.productName}</p>
            <p>Product Price: {value.productPrice}</p>
            <p>Product Description: {value.productDescription}</p>
            <aside>
              <button>Edit</button>
              <button>Delete</button>
            </aside>
          </article>
        );
      })}
    </div>
  )
}

export default DisplayData