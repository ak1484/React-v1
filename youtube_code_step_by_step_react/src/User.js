//Basic Form filling

import { useState } from "react";
function User() {
  const [name, setName] = useState(null);
  const [interest, setInterest] = useState(null);
  const [tnc, setTnc] = useState(false);
  function getFormData(e) {
    console.warn(name, interest, tnc);
    e.preventDefault();
  }
  return (
    <>
      <h1>Basic Form filling</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default User;
