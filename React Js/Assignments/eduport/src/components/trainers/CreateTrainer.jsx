import React, { useContext, useState } from "react";
import { trainerContext } from './../context/TrainerContext';
import CreateForm from './../form/CreateForm';
const CreateTrainer = () => {
  let [trainerDetails, setTrainerDetails] = useState({
    trainerName: "",
    experience: "",
    technologies: "",
    email: "",
    contact: "",
  });
  let { trainerName, experience, technologies, email, contact } = trainerDetails;
  let {addTrainer}=useContext(trainerContext)
  let trainerData = [
    {
      name: "trainerName",
      stateValue: trainerName,
      type: "text",
    },
    {
      name: "email",
      stateValue: email,
      type: "email",
    },
    {
      name: "contact",
      stateValue: contact,
      type: "tel",
    },
    {
      name: "experience",
      stateValue: experience,
      type: "number",
    },
    {
      name: "technologies",
      stateValue: technologies,
      type: "text",
    },
  ];
  let handleChange = (e) => {
    let { name, value } = e.target;
    setTrainerDetails({ ...trainerDetails, [name]: value });
  };
  let handleSubmit = () => {
    addTrainer(trainerDetails);
  };

  return <div>
    <CreateForm data={trainerData} handleChange={handleChange} handleSubmit={handleSubmit}/>
  </div>
};

export default CreateTrainer;
