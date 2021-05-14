//props in functional component with on click change
import React ,{useState} from 'react'
import Student from "./Student";
function User() {
  const [name,setName]=useState("ankit")
  return (
    <>
      <h1>props in functional component</h1>
      {/* this why we transfer props in f com */}
      <Student name={name} email={name+"@test.com"} />
      <button onClick={()=>setName("vikram")}>Update Name</button>
    </>
  );
}
export default User;
