import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { trainerContext } from "../context/TrainerContext";

const SingleTrainer = () => {
  let { id } = useParams();
  let { fetchSingleTrainer, singleTrainer } = useContext(trainerContext);
  useEffect(()=>{
    fetchSingleTrainer(id);
  },[]);
  return (
    <div>
      {
        <>
          <p>Trainer Name:{singleTrainer?.trainerName}</p>
          <p>Trainer email:{singleTrainer?.email}</p>
          <p>Trainer contact:{singleTrainer?.contact}</p>
          <p>Trainer experience:{singleTrainer?.experience}</p>
          <p>Trainer technologies:{singleTrainer?.technologies}</p>
        </>
      }
    </div>
  );
};

export default SingleTrainer;
