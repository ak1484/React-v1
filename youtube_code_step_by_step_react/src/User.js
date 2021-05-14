//Hide and show element
import React ,{useState} from 'react'
function User() {
  const[status,setStatus]=useState(true)
  return (
    <>
      {status?<h1>Hide and show element</h1>:null}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  );
}
export default User;
