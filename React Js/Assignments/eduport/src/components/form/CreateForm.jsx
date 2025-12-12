import React from "react";

const CreateForm = ({data}) => {
  return (
    <div>
      <form action="">
        {data.map((value) => {
          return (
            <aside>
              <label htmlFor="">{value}</label>
              <input type="text" placeholder={`Enter your ${value}`} />
            </aside>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
