import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseDetails() {
  const { name } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/courses?name=${name}`)
      .then((res) => res.json())
      .then((data) => setCourse(data[0]));
  }, []);

  return (
    <div>
      <h2>Course Details</h2>
      {course && (
        <>
          <p><b>Course:</b> {course.name}</p>
          <p><b>Learn:</b> {course.learn}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Price:</b> {course.price}</p>
        </>
      )}
    </div>
  );
}
