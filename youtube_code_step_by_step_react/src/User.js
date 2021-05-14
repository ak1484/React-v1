//Get input box value and print 
import React, { useState } from "react";
function User() {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(null);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false)
  }
  return (
    <>
      <h1>Get input box value</h1>
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </>
  );
}
export default User;
