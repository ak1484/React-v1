//Should component Update
import React, { Component } from "react";
class User extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.warn("SCU", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
    return false;
    //isse state toh update hoti hai pr component Rerender nhi hota hai kyoki return false hai
  }
  render() {
    return (
      <div>
        <h1>Should component Update </h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}
export default User;
