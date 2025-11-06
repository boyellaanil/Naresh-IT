import React from "react";

class ClassState extends React.Component {
    constructor(){
        super();
        this.state={name:"Anil", 
            count:0,
        }
    }
    render(){
        return(
        <>
            <h1>I am a class state component</h1>
            {/* //static state */}
            <h2>My name is {this.state.name}</h2>  
            {/* //dynamic state */}
            <h2 onClick={()=>this.setState({ name:"Arafath" })}>My name is {this.state.name}</h2>
            {/* counter  */}
            <h2>Count{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Inc</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>dec</button>
        </>
    )}
}
export default ClassState;