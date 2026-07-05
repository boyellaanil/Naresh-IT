import {useState,createContext} from 'react';
import axios from 'axios';
import SingleCourse from './../courses/SingleCourse';

export let courseContext=createContext();

let CousreProvider=({children})=>{

    let [detailsCourse,setDetailsCourse]=useState({
        courses:[],
        singleCourse:"",
    });

    let {courses,singleCourse}=detailsCourse;

    let addCourse=async (data)=>{
        await axios.post("http://localhost:3000/courses",data);
    };

    let fetchCourses=async ()=>{
       try{
         let {data}=await axios.get("http://localhost:3000/courses");
        setDetailsCourse({...detailsCourse,courses:data});
       }
       catch(err){
        console.log(err);
       }
    };
    let fetchSingleCourse=(id)=>{
        let course =courses.find(value=>value.id===id);
        setDetailsCourse({...detailsCourse,singleCourse:course});
    };
    return (<courseContext.Provider value={{addCourse,fetchCourses,courses,singleCourse,fetchSingleCourse}}>{children}</courseContext.Provider>)
}
export default CousreProvider;