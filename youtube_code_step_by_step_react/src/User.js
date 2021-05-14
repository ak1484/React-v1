//useEffect hook
import React, { useState,useEffect} from "react";
function User() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.warn("use Effect call")
    //component did mount k wajas se call ho jata hai
  },[count])
  //count wala ki wajas se chal rha hai use Effect 
  return (
    <div>
      <h1>useEffect hook</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Update Data</button>
    </div>
  );
}
export default User;
