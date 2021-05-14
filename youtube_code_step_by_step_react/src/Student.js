function Student(prop) {
    console.log(prop.name)
  return (
    <div>
      <h2>Name : {prop.name}</h2>
      <h2>Email : {prop.email}</h2>

    </div>
  );
}
export default Student;
