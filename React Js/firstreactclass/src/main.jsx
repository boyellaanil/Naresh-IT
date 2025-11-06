import React,{Fragment} from 'react';
import ReactDOM from 'react-dom/client';

// console.log('Application starting...');

// //example for creating elements

// let div=React.createElement(        //1st element
//     'div',
//      null,  
//      React.createElement(           //2nd element
//        'i', 
//         null, 
//         React.createElement(            //3rd element
//         'u',
//         null,
//        'Hello World!')),
//     React.createElement('h1', null, 'this is h1 tag')   //4th element
//     );

// ReactDOM.createRoot(document.getElementById('root')).render(div);

// //example for JSX
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <div className="container">
//         <h2>
//             <i><u>i am h2 tag</u></i>
//         </h2>
//         <h1>i am h1 tag</h1>
//     </div>
// );

//example for fragment 1st way

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.Fragment>
//         <h2>
//             <i>
//                 <u>
//                     i am h2 tag inside fragment
//                 </u>
//             </i>
//         </h2>
//         <h1>i am h1 tag inside fragment</h1>
//     </React.Fragment>
// );

//example for fragment 2nd way
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//         <h2>
//             <i>
//                 <u>
//                     i am h2 tag inside fragment
//                 </u>
//             </i>
//         </h2>
//         <h1>i am h1 tag inside fragment</h1>
//     </>
// );

// ! JSX Expression
let num=10
let num2=20
let name="Anil"

let names=[{name:"Anil",age:21},{name:"Sunil",age:22},
{name:"Kiran",age:23}]
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <h1>{num+num2}</h1>
    <h2>{name}</h2>
    {
        names.map(value=>{
            return <h3>{`Name: ${value.name} Age: ${value.age}`}</h3>
        })
    }
    </>
);