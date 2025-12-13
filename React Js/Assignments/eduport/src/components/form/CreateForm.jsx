import React from "react";

const CreateForm = ({data,handleChange}) => {
  
  return (
    <div>
      <form action="">
        {data.map((value) => {
          return (
            <aside>
              <label htmlFor="">{value.name}</label>
              <input type="text" placeholder={`Enter your ${value.name}`} 
              value={value.name} 
              onChange={handleChange}
              name={value.name}/>
            </aside>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
