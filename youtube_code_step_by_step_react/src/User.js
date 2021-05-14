// state in functional component
import React,{useState} from 'react';
function User() {
  const [data,setData]=useState("ankit")
  // let data = "ankit";
  // function updateData() {
  //   data = "viki";
  //   alert(data);
  // }
  function updateData(){
    setData("vikram")
  }
  return (
    <>
      <h1>state in functional component</h1>
      <h2>{data}</h2>
      <button onClick={updateData}>Update data</button>
    </>
  );
}
export default User;
