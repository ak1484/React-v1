//useEffect hook
import React, {useEffect} from "react";
function Student(prop) {
//   useEffect(()=>{
//     console.warn("use Effect called with Count "+prop.count)
//   },[prop.count])
//   useEffect(()=>{
//     console.warn("use Effect called wih Data "+prop.data)
//   },[prop.data])
  useEffect(()=>{
    console.warn("use Effect called with both ")
  })
  //[prop.data,prop.count]
  return (
    <div>
      <h2>Count : {prop.count}</h2>
      <h2>Data : {prop.data}</h2>
    </div>
  );
}
export default Student;
