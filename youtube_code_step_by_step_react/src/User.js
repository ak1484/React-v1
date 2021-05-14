//props in class component with on click  state change
import React from "react";
import Student from "./Student";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ankit",
      email: "ankit@test.com",
    };
  }
  render() {
    return (
      <>
        <h1>props in class component</h1>
        {/* this why we transfer props in c com */}
        <Student name={this.state.name} email={this.state.email} />
        <button onClick={() =>this.setState({name:"vikram",email:"vikram@text.com"})}>Update Name and Email</button>
      </>
    );
  }
}
export default User;
