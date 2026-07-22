import React, { useContext, useEffect } from "react";
import { courseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";
const DisplayCourses = () => {
  let { fetchCourses, courses } = useContext(courseContext);
  useEffect(() => {
    fetchCourses();
  }, []);
  let navigate=useNavigate();
  let navigateToSingleCourse=(id)=>{
    navigate(`/singleCourse/${id}`);
  }
  return (
    <div>
      {courses.map((Value) => {
        return (
          <article>
            <p>Course Name : {Value.courseName}</p>
            <p>Price : {Value.price}Rs</p>
            <p>Duration : {Value.duration}Months</p>
            <button onClick={()=>{
              navigateToSingleCourse(Value.id)
            }}>Course Details </button>
          </article>
          
        );
      })}
    </div>
  );
};
export default DisplayCourses;
