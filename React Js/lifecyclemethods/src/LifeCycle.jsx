import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super();
        console.log("i am a constructor method");
        this.state={
            count:0,
            name:"",
        };
    }
    inc=()=>this.setState({count :this.state.count+1});
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props");
        console.log(props);
        console.log(state);
        if(props.name !== state.name){
            return{
                name :props.name,
            }
        };
        return null;
    };

    componentDidMount(){
        console.log(" i am a component did mount");
    };
  render() {
    console.log("i am a render method");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>inc</button>
      </div>
    );
  };
};
