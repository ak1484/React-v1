//useEffect hook
import React, { useState} from "react";
import Student from "./Student";
function User() {
  const [count,setCount]=useState(0)
  const [data,setData]=useState(10)
  return (
    <div>
      <h1>useEffect hook</h1>
      <Student data={data} count={count}/>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  );
}
export default User;