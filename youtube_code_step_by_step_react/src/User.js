//Pass function as props
import Student from "./Student";
function User() {
  // we can use the same fun in as many child ||reusebility
  function getData()
  {
    alert("hello from user")
  }
  return (
    <>
      <h1>Pass function as props</h1>
      <Student data={getData}/>
    </>
  );
}
export default User;
