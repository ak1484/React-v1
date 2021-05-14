//Life cycle methods
//constructor life cycle method
import React, { Component } from "react";
class User extends Component {
  constructor()
  {
    //super is javascript concept
    super()
    //first constructor then render
    // console.warn("constructor")
    this.state={
      data:"ankit"
    }
    //never call api in constructor
  }
  render() {
    console.warn("render")
    return (
      <>
        <h1>Life cycle methods</h1>
        <h2>Name : {this.state.data}</h2>
      </>
    );
  }
}
export default User;
