import React, { useState } from "react";
import Form from "./Form.jsx";
import DisplayData from "./DisplayData.jsx";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
const Parent = () => {
  let [details, setDetails] = React.useState({
    id: uuidv4(),
    productName: "",
    productPrice: "",
    productDescription: "",
  });
  let [displayData, setDisplayData] = useState([]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData([...displayData, details]);
    setDetails({
      id: uuidv4(),
      productName: "",
      productPrice: "",
      productDescription: "",
    });
  };
  console.log(displayData);
  let updateproduct = (data) => {
    setDetails(data);
    let filteredData = displayData.filter((value) => {
      value.id != data.id;
    });
    setDisplayData(filteredData);
  };
  let handleDelete = (data) => {
    let filteredData = displayData.filter((value) => {
      value.id != data.id;
    });
    setDisplayData(filteredData);
  };
  return (
    <div className="parent-container">
      <aside>
        <Form
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </aside>
      <aside>
        <DisplayData
          details={displayData}
          handleEdit={updateproduct}
          handleDelete={handleDelete}
        />
      </aside>
    </div>
  );
};

export default Parent;
