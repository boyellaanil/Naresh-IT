import React,{useRef,useState} from 'react'
import DisplayFormData from './DisplayFormData';

const UncontrolledForms = () => {
    let [formData,setFormData]=useState();
    let [isDisplay,setIsDisplay]=useState(false);
    let email=useRef();
    let password=useRef();
    let fname=useRef();
    let lname=useRef();
    let age=useRef();

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email.current.value);
        let details={
            fname:fname.current.value,
            lname:lname.current.value,
            age:age.current.value,
            email:email.current.value,
            password:password.current.value,
        };
        console.log(details);
        setIsDisplay(true);
        setFormData(details);
        fname.current.value="";
        lname.current.value="";
        age.current.value="";
        email.current.value="";
        password.current.value="";
        
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <article>
                <label htmlFor="">FirstName</label>
                <input type="text" ref={fname}/>
            </article>
            <article>
                <label htmlFor="">LastName</label>
                <input type="text" ref={lname}/>
            </article>
            <article>
                <label htmlFor="">Age</label>
                <input type="number" ref={age}/>
            </article>
            <article>
                <label htmlFor="">Email</label>
                <input type="text"ref={email}/>
            </article>
            <article>
                 <label htmlFor="">Password</label>
                <input type="password" ref={password}/>
            </article>
            <article>
                <button>Submit</button>
            </article>
        </form>
        <section>
            {isDisplay&& <DisplayFormData details={formData}/>}
        </section>
    </div>
  );
};

export default UncontrolledForms