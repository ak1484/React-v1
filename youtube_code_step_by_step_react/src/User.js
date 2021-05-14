// state in class component
import React from 'react';
class User extends React.Component {
  constructor()
  {
    //super javasript ki property hai
    super()
    this.state={
      // data:"ankit"
      count:0
    }
  }
  updateData(){
    // alert("update data")
    // this.setState({data:"vikram"})
    this.setState({count:this.state.count+1})
  }
  render(){
  return (
    <>
      <h1>state in class component</h1>
      <h2>{this.state.count}</h2>
      <button onClick={()=>this.updateData()}>Update data</button>
    </>
  );}
}
export default User;
