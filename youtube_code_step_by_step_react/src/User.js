//component did mount
import React, { Component } from "react";
class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "ankit",
    };
  }
  componentDidMount() {
    console.warn("CDM");
    //only when component mount
    //thus we use api inside CDM
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>component did mount</h1>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({ name: "viki" })}>
          update name
        </button>
      </div>
    );
  }
}
export default User;
