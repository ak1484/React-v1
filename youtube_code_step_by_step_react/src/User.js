//render life cycle method
import { useState } from "react";
import Student from "./Student";
function User(prop) {
  const [name, setName] = useState("ankit");
   return (
     <div>
     <h1>render cycle methods</h1>
     <Student name={name}/>
     <button onClick={()=>setName("viki")}>Update Name</button>
     </div>
   );
 }
 export default User;
