import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseContext } from "../context/CourseContext";
const SingleCourse = () => {
  let { id } = useParams();
  let { SingleCourse, fetchSingleCourse } = useContext(courseContext);
  console.log(SingleCourse);
  useEffect(() => {
    fetchSingleCourse(id);
  }, []);
  console.log(id);
  return (
    <div>
      <p>Course Name:{SingleCourse.courseName}</p>
      <p>Price:{SingleCourse.price}Rs</p>
      <p>Duration:{SingleCourse.duration}Months</p>
      <p>Trainer Name: {SingleCourse.trainerName}</p>
      <p>Technology : {SingleCourse.techology}</p>
    </div>
  );
};
export default SingleCourse;
