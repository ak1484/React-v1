//component will unmount
import React, { Component } from "react";
import Student from "./Student";
class User extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <h1>component will unmount</h1>
        {this.state.show ? <Student /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child
        </button>
      </div>
    );
  }
}
export default User;
