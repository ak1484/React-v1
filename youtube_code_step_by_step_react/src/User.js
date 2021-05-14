//Hooks in React js
import React, { useState} from "react";
function User() {
  const [data,setData]=useState("ankit")
  return (
    <div>
      <h1>Hooks in React js</h1>
      <h2>{data}</h2>
      <button onClick={()=>setData("vikram")}>Update Data</button>
    </div>
  );
}
export default User;
