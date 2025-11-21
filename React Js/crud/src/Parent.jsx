import React,{useState} from 'react'
import Form from './Form.jsx';
import DisplayData from './DisplayData.jsx';
import "./style.css";
const Parent = () => {
    let [details, setDetails] = React.useState({
        productName: "",
        productPrice: "",
        productDescription: "",
    });
    let [displayData, setDisplayData] = useState([]);
    let handleChange = (e) => {
        let {name, value} = e.target;
        setDetails({...details, [name]: value});
    };
    let handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData([...displayData, details]);
    setDetails({
      productName: "",
      productPrice: "",
      productDescription: "",
    });
  };
  return (
    <div className='parent-container'>
        <aside>
            <Form details={details} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
        </aside>
        <aside>
            <DisplayData details={displayData}/>
        </aside>
    </div>
  )
}

export default Parent