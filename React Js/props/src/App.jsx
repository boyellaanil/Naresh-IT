import React, { Component } from 'react'
import ClassProps from './ClassProps';
import Data from './Data';
import FunctionProp from './FunctionProp';
import DetailsData from './DetailsData';
import Counter from './Counter';
import DefaultProps from './DefaultProps';
import Parent from './Parent';
const App =()=>{
  let [count,setCount]=React.useState(0);

  let inc=()=>setCount(count+1); 
  let dec=()=>setCount(count-1); 
  // let details={
  //   userName:"Arafath",
  //   isAvailable:true,
  // }
  // let employDetails=[
  //   {
  //     employeeName: "vinay",
  //     isAvailable: true,
  //   },
  //   {
  //     employeeName: "ajay",
  //     isAvailable: false,
  //   },
  //   {
  //     employeeName: "arun",
  //     isAvailable: false,
  //   },
  //   {
  //     employeeName: "vijay",
  //     isAvailable: true,
  //   }
  // ]
    return (
      <div>
       
        {/* <FunctionProp userName="Arafath" age={30}/> */}
        {/* <DetailsData userDetails={details}/> */}
        {/* <DetailsData employeesData={employDetails} />  */}
        {/* <Counter count={count} inc={inc} dec={dec} /> */}
        {/* <Counter countData={{ count, inc, dec }} /> */}
        {/* <DefaultProps userName="Ravi" />
        <DefaultProps />
        <DefaultProps userName = "Priya" />  */}
        <Parent userName="Anil"/>
      </div>
    );
  };
export default App;
