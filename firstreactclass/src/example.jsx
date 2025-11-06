import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('Application starting...');

// ! example for creating elements
// let div=React.createElement('h1',null,"I am example for creating Element");
// ReactDOM.createRoot(document.getElementById('root')).render(div);

// ! example for jsx
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <h1>I am example for JSX</h1>
// );

// ! example for fragment
// ReactDOM.createRoot(document.getElementById('root')).render( 
//     <React.Fragment>
//         <h1>I am example for 1st way of Fragment</h1>
//     </React.Fragment>
// );

// ! example for fragment 2nd way
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//         <h1>I am example for 2nd way of Fragment</h1>
//     </>
// );


//Example for the JSX Expression
//ex 1:
// let n1=10;
// let n2=20;
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <h2>{n1*n2}</h2>
// );

//ex 2:
// let name="Arafath";
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <h2>{name}</h2>
// );

//ex 3:
let cars=['BMW','Audi','Mercedes','Volvo'];
ReactDOM.createRoot(document.getElementById('root')).render(
   <>
   <h1>
        {
            cars.map(value=>{
            return <p key={value}>{value}</p>
            })
        }
    </h1>
    </>
);

//ex 4:
// let cars=[{name:'BMW',year:2025},{name:'Audi',year:2024},{name:'Mercedes',year:2023}];
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//     <h1>
//         {
//             cars.map(value=>{
//             return <p key={value.name}>{value.name} - {value.year}</p>
//             })
//         }
//     </h1>
//     </>
// );