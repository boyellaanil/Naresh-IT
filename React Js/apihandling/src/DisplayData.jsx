import React, { Component } from "react";
import Form from "./Form";
export default class DisplayData extends Component {
  constructor(){
    super();
    this.state={
      userData:[],
      loading:false,
    };
  };
  addUser = async (userData) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };
   users=async()=>{
    try{
      let response=await fetch("http://localhost:3000/users");
    let data=await response.json();
    console.log(data);
    this.setState({userData:data});
    }catch(error){
      console.log(error)
    }
  };
  componentDidMount(){
    this.users();
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Form addUser={this.addUser} />
        <section>
          {this.state.userData.map((user)=>{
              return(
                <article key={user.id}>
                  <h1>{user.name}</h1>
                  <button>Edit</button>
                  <button>Delete</button>
                </article>
              )
            })
          }
        </section>
      </div>
    );
  }
}
