//component did update
import React, { Component } from "react";
class User extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
    };
  }
  componentDidUpdate(preProps,preState,snapshot)
  {
     console.warn("CDU",preState,this.state.count)
    //  if(this.state.count<10)
    //  {
    //    this.setState({count:this.state.count+1})
    //  }
    //we can update state but with condition in CDU
  }
  render() {
    return (
      <div>
        <h1>component did update</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count:this.state.count+1})}>
          Update Count
        </button>
      </div>
    );
  }
}
export default User;
