import React, { Component } from "react";
export default class LifeCycle extends Component {
  // constructor(){
  //     super();
  //     console.log("i am a constructor method");
  //     this.state={
  //         name:"",
  //     };
  // }
  // inc=()=>this.setState({count :this.state.count+1});
  // static getDerivedStateFromProps(props,state){
  //     console.log("get derived state from props");
  //     // console.log(props);
  //     // console.log(state);
  //     if(props.name !== state.name){
  //         return{
  //             name :props.name,
  //         }
  //     };
  //     return null;
  // };
  // shouldComponentUpdate(){
  //   return true;
  // };
  // componentDidUpdate(prevState){
  //   if(prevState.count!=this.state.count){
  //     console.log("the state is updated")
  //   }
  // };
  componentDidMount() {
    console.log(" i am a component did mount");
  }
  componentDidUpdate(prevProps) {
    if (prevProps.count != this.props.count) {
      console.log("component did update");
    }
  }

  // componentWillUnmount(){
  //   console.log("component will unmount is triggered")
  // };
  render() {
    console.log("i am a render method");
    return (
      <div>
        <h1>{this.props.count}</h1>
        {/* <h2>Hello{this.state.name}</h2> */}
        <button onClick={this.props.inc}>inc</button>
      </div>
    );
  }
}
