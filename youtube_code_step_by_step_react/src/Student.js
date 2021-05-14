import React, { Component } from "react";
class Student extends Component {
  render() {
    return (
      <div style={{backgroundColor:"skyblue",margin:10}}>
        <h2>Student Name : {this.props.name}</h2>
        <h2>Student Email : {this.props.email}</h2>
      </div>
    );
  }
}
export default Student;
