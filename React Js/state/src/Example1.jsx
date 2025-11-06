import React  from 'react';
let Example1=()=>{
    let [car, setCar]=React.useState("BMW");
    console.log(car);
    console.log(setCar);

    let [speed,setSpeed]=React.useState(0);

    return(
        <>
            <h1>this is example for combination of both useState() hook and function based state</h1>

            <h2 onClick={()=>setCar("Audi")}>My car name is {car}</h2>

            <h2>Speed is {speed} km/hr</h2>
            <button onClick={()=>setSpeed(speed+20)}>Increase Speed</button>
            <button onClick={()=>speed>0 && setSpeed(speed-10)}>Decrease Speed</button>
            <button onClick={()=>setSpeed(0)}>Reset Speed</button>
        </>
    )
}
export default Example1;