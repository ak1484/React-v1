import React, { Component } from "react";
class Student extends Component {
    constructor()
    {
        super()
        this.state={
            data:"render"
        }
    }
  render() {
      console.warn("render method",this.state.data)
    return (
      <>
        <h1>{this.props.name}</h1>
        <button onClick={()=>this.setState({data:"rerender"})}>rerender prop</button>
      </>
    );
  }
}
export default Student;