//Bootstrap
import {Button} from 'react-bootstrap'
function User() {
  return (
    <div>
      <h1>Bootstrap</h1>
      <Button onClick={()=>alert("bootstrap")} >Click me</Button>
    </div>
  );
}
export default User;
