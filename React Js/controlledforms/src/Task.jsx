import React,{useState} from 'react'

const Task = () => {
    let [details,setDetails]=useState({
        fname : "",
        lname : "",
        uname : "",
        email : "",
        age : "",
        gender: "",
    });
  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
    console.log(details);
  };

  let handleChange=(e)=>{
   let {name,value}=e.target;
   setDetails({...details,[name]:value});
  };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <aside>
                <label htmlFor="">FirstName</label>
                <input type="text" value={details.fname} name="fname" onChange={handleChange}/>
            </aside>
            <aside>
                <label htmlFor="">LastName</label>
                <input type="text" value={details.lname} name="lname" onChange={handleChange}/>
            </aside>
            <aside>
                <label htmlFor="">UserName</label>
                <input type="text" value={details.uname} name="uname" onChange={handleChange}/>
            </aside>
            <aside>
                <label htmlFor="">Email</label>
                <input type="text" value={details.email} name="email" onChange={handleChange}/>
            </aside>
            <aside>
                <label htmlFor="">Age</label>
                <input type="number" value={details.age} name="age" onChange={handleChange}/>
            </aside>
            <aside value={details.gender}>
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" value="male"/>Male
                <input type="radio" name="gender" value="female"/>Female
                <input type="radio" name="gender" value="others"/>Others
            </aside>
            <aside>
                <button type="Submit">Submit</button>
            </aside>
        </form>
    </div>
  )
}

export default Task