import React, { Component } from "react";
import Form from "./Form";

export default class DisplayData extends Component {
  constructor() {
    super();
    this.state = {
      uname: "",
      pword: "",
      userData: [],
      loading: false
    };
  }

  addUser = async () => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ uname: this.state.uname, pword: this.state.pword }),
    });

    this.setState({ uname: "", pword: "" });
    this.getUsers();
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    this.setState({ userData: data });
  };
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.addUser();
  };

  render() {
    return (
      <div>
        <Form
          uname={this.state.uname}
          pword={this.state.pword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
       
      </div>
    );
  }
}
