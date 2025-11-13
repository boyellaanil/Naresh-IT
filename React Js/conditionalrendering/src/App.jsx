import React from 'react'
import DisplayData from './DisplayData'
import PageNotFound from './PageNotFound'

const App = () => {
 let [display, setDisplay] = useState("kumari");

        // if-else condition
  //   if (display) {
  //     return <h1>I am a App Component</h1>;
  //   } else {
  //     return <h1>Data Not Found</h1>;
  //   }

        // Ternary Operator
  //   return (
  //     <>
  //       <PageNotFound />
  //       <h1>{display ? " I am a component" : "Data Not Found"}</h1>
  //     </>
  //   );


        //if-else with Components
  //   if (display) {
  //     return <DisplayData />;
  //   } else {
  //     return <PageNotFound />;
  //   }

        // Ternary Operator with Components
  //   return <section> {display ? <DisplayData /> : <PageNotFound />}</section>;
        // short circuit Operator
  //   return <section>{display && <DisplayData />}</section>;

        // Switch Case
  //   let score = 90;

  //   switch (true) {
  //     case score > 90: {
  //       console.log("Rank 1");
  //       break;
  //     }
  //     case score > 80: {
  //       console.log("Rank 2");
  //       break;
  //     }
  //     case score > 70: {
  //       console.log("Rank 3 ");
  //       break;
  //     }
  //     case score >= 35: {
  //       console.log("pass");
  //       break;
  //     }
  //     default: {
  //       console.log("Fail");
  //     }
  //   }


  switch (display) {
    case "ravi": {
      return <DisplayData userName="Ravi" />;
    }
    case "ram": {
      return <DisplayData userName="Ram" />;
    }
    case "ramya": {
      return <DisplayData userName="Ramya" />;
    }
    default: {
      return <PageNotFound />;
    }
  }

}
export default App