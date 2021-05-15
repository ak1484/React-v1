//Styles in React js
//inline css,normal css file with .css estension and 3rd modular css
import "./styles/style.css";
import style from "./styles/custom.module.css";
function User() {
  return (
    <div>
      <h1>Styles in React js</h1>
      <h1 style={{ color: "red", backgroundColor: "blue", margin: 20 }}>
        InLine Styles
      </h1>
      <h1 className="primary">normal css style</h1>
      <h1 className={style.sucess}>Modular css style</h1>
      <h1>styled component not yet done</h1>
    </div>
  );
}
export default User;
