import React from "react";
const DetailsData = (props) => {
    // Destructuring props object

    // console.log(props)
    // console.log(props.userDetails.userName)
    // let {userDetails}=props;
    // console.log(userDetails)
    // let{userName,isAvailable}=userDetails;
    // console.log(userName)
    // console.log(isAvailable)
    
             // OR   

    // let {userDetails:{userName, isAvailable}}=props;
    // console.log(userName, isAvailable);
    // return (
    //     <div>
    //         <h1>Name:{userName}</h1>
    //         <p>Is Available : {isAvailable?"Online":"busy"}</p>
    //     </div>
    // )

    let {employeesData}=props;
    console.log(employeesData);
    return(
        <div>
            {employeesData?.map(value =>{
                return(
                    <>
                        <h1>Name: {value.employeeName}</h1>
                        <p>Is Available: {value.isAvailable ? "Online" : "Busy"}</p>
                    </>
                )
            })};
        </div>
)};
export default DetailsData;