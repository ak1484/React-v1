//import { useState } from "react";
function Student(prop) {
 // const [student, setstudent] = useState(2);
  return (
    <div>
    <h1>Student component</h1>
    <button onClick={()=>prop.data()}>Call parent fun</button>
    </div>
  );
}
export default Student;
