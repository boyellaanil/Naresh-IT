import { useEffect, useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";

export default function DisplayData() {
  const { courses, setCourses } = useContext(CourseContext);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h2>Courses List</h2>
      {courses.map((course, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px" }}>
          <h3>{course.name}</h3>
          <p>Duration: {course.duration}</p>
          <Link to={`/courses/${course.name}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}
