import React, { useContext } from 'react'
import { trainerContext } from './../context/TrainerContext';
import { useNavigate } from 'react-router-dom';

const DisplayTrainer = () => {
  let {fetchTrainersData,trainersData}=useContext(trainerContext);
  useEffect(()=>{
    fetchTrainersData();
  },[]);

  let navigate=useNavigate();
  return (
    <div>
      {trainersData.map((value)=>{
        return (
          <article>
            <p>TrainerName :{value.name}</p>
            <p>Technology : {value.technologies}</p>
            <button onClick={()=>{
              navigate(`/singleTainer/${value.id}`)
            }}>View Details</button>
          </article>
        )
      })}
    </div>
  )
}

export default DisplayTrainer