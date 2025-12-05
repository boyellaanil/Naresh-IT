import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export default function Form() {
  const { setCourses } = useContext(CourseContext);

  const [data, setData] = useState({
    name: "",
    learn: "",
    duration: "",
    price: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Course Added Successfully!");

    setCourses((prev) => [...prev, data]);
  };


  return (
    <form action="" onSubmit={handleSubmit}>
      <input placeholder="Course Name"
        onChange={(e) => setData({ ...data, name: e.target.value })} /><br />

      <input placeholder="What did you learn?"
        onChange={(e) => setData({ ...data, learn: e.target.value })} /><br />

      <input placeholder="Duration"
        onChange={(e) => setData({ ...data, duration: e.target.value })} /><br />

      <input placeholder="Price"
        onChange={(e) => setData({ ...data, price: e.target.value })} /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
