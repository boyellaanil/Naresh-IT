import React, {useState} from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'

const Parent = () => {
    const [form1Data, setForm1Data] = useState({
    username: "",
    password: ""
  });

  const [form2Data, setForm2Data] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [form3Data, setForm3Data] = useState({
    email: "",
    phone: "",
    username: "",
    password: ""
  });
   const handleForm1Change = (e) => {
    let { name, value } = e.target;
    setForm1Data({ ...form1Data, [name]: value });
  };

  const handleForm2Change = (e) => {
    let { name, value } = e.target;
    setForm2Data({ ...form2Data, [name]: value });
  };

  const handleForm3Change = (e) => {
    let { name, value } = e.target;
    setForm3Data({ ...form3Data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  return (
    <div>
        <Form1  
        data={form1Data}
        handleChange={handleForm1Change}
        handleSubmit={handleSubmit}/>
        <Form2  
        data={form2Data}
        handleChange={handleForm2Change}
        handleSubmit={handleSubmit}/>
        <Form3  
        data={form3Data}
        handleChange={handleForm3Change}
        handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Parent