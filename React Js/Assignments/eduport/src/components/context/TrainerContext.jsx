import { createContext, useState } from "react";
import axios from "axios";

export let trainerContext = createContext();

let TrainerProvider = ({ children }) => {
  let [trainers, setTrainers] = useState({
    trainersData: [],
    singleTariner: "",
  });

  let { trainersData, singleTrainer } = trainers;
  let fetchTrainerData = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/trainers");
      setTrainers({ ...trainersData, trainersData: data });
    } catch (err) {
      console.log(err);
    }
  };
  let addTrainer = async (data) => {
    try {
      await axios.post("http://localhost:3000/trainers", data);
    } catch (err) {
      console.log(err);
    }
  };
  return <trainerContext.Provider value={{fetchTrainerData,addTrainer,trainersData,singleTrainer}}> {children}</trainerContext.Provider>;
};
export default TrainerProvider