import React, { useContext } from 'react'
import { courseContext } from '../context/CourseContext';
import CreateForm from '../form/CreateForm';
const CreateCourse = () => {
  let [courseDetails,setCourseDetails]=React.useState({
    courseName:"",
    price:"",
    duration:"",
    technology:"",
    trainerName:"",
  })
  let {courseName,price,duration,technology,trainerName}=courseDetails;
  let{addCourse}=useContext(courseContext);
  let courseData=[
    {
      name:"courseName",
      stateValue:courseName,
      type:"text",
    },
    {
      name:"price",
      stateValue:price,
      type:"number",
    },
     {
      name:"duration",
      stateValue:duration,
      type:"number",
    },
    {
      name:"technology",
      stateValue:technology,
      type:"text",
    },
    {
      name:"trainerName",
      stateValue:trainerName,
      type:"text",
    },
  ];
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setCourseDetails({...courseDetails,[name]:value})  
  }
  let handleSubmit=()=>{
    addCourse(courseDetails);
  }
  return (
    <div>
      <CreateForm data={courseData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}
export default CreateCourse