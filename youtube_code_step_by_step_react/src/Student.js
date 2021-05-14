import React, { Component } from "react";
class Student extends Component {
    componentWillUnmount()
    {
        console.warn("CWUM")
        //function calling k liye hota or timer bhi use sakte hai
    }
  render() {
    return (
      <>
       <h1>Student component</h1>
      </>
    );
  }
}
export default Student;