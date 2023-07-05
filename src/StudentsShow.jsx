export function StudentsShow(props) {
  return (
    <div>
      <h1>Student information</h1>
      <p>First_Name: {props.student.first_name}</p>
      <p>Last_Name: {props.student.last_name}</p>
      <p>Email: {props.student.email}</p>
      <p>Phone Number: {props.student.phone_number}</p>
      <p>Short Bio: {props.student.phone_number}</p>
      <p>LinkedIn: {props.student.phone_number}</p>
      <p>Twitter: {props.student.phone_number}</p>
      <p>Personal Blog: {props.student.phone_number}</p>
      <p>Online Resume: {props.student.phone_number}</p>
      <p>Github URL: {props.student.phone_number}</p>
      <p>Photo: {props.student.photo}</p>
    </div>
  );
}
