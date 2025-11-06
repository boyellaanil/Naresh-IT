import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
        <h1>my name is {this.props.userName} and my age is {this.props.age}</h1>
    )
  }
}
