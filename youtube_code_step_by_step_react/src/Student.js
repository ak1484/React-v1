import { useState } from "react";
function Student() {
  const [student, setstudent] = useState(2);
  return (
    <div>
      {student == 1 ? (
        <h1>student 1 component</h1>
      ) : student == 2 ? (
        <h1>student 2 component</h1>
      ) : (
        <h1>student 3 component</h1>
      )}
    </div>
  );
}
export default Student;
