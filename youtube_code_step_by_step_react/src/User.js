//click Event and Function
//never use apple() inside curly braces in function comp
//{=>alert("apple fun")} we can also use arrow fun
function User() {
  let data = "ankit";
  function apple() {
    data = "viki";
    //thats why we use state and props
    alert("apple function call");
  }
  return (
    <>
      <h1>click Event and Function</h1>
      <h2>{data}</h2>
      {/* we can't update data directly using variable */}
      <button onclick={apple}>Click me</button>
    </>
  );
}
export default User;
