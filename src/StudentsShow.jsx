export function StudentsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePhoto(props.student.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Student information</h1>
      <p>First_Name: {props.student.first_name}</p>
      <p>Last_Name: {props.student.last_name}</p>
      <p>Email: {props.student.email}</p>
      <p>Phone Number: {props.student.phone_number}</p>
      <p>Short Bio: {props.student.short_bio}</p>
      <p>LinkedIn: {props.student.linkedin_url}</p>
      <p>Twitter: {props.student.twitter_handle}</p>
      <p>Personal Blog: {props.student.personal_website_url}</p>
      <p>Online Resume: {props.student.online_resume_url}</p>
      <p>Github URL: {props.student.github_url}</p>
      <p>Photo: {props.student.photo}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            defaultValue={props.student.first_name}
            name="first_name"
            type="text"
          />
        </div>
        <div>
          Last Name:{" "}
          <input
            defaultValue={props.student.last_name}
            name="last_name"
            type="text"
          />
        </div>
        <div>
          Email:{" "}
          <input defaultValue={props.student.email} name="email" type="text" />
        </div>
        <div>
          Phone Number:{" "}
          <input
            defaultValue={props.student.phone_number}
            name="phone_number"
            type="text"
          />
        </div>
        <div>
          Short Bio:{" "}
          <textarea
            defaultValue={props.student.short_bio}
            name="short_bio"
            rows="4"
          />
        </div>
        <div>
          LinkedIn:{" "}
          <input
            defaultValue={props.student.linkedin_url}
            name="linkedin_url"
            type="text"
          />
        </div>
        <div>
          Twitter:{" "}
          <input
            defaultValue={props.student.twitter_handle}
            name="twitter_handle"
            type="text"
          />
        </div>
        <div>
          Personal Blog:{" "}
          <input
            defaultValue={props.student.personal_website_url}
            name="personal_website_url"
            type="text"
          />
        </div>
        <div>
          Online Resume:{" "}
          <input
            defaultValue={props.student.online_resume_url}
            name="online_resume_url"
            type="text"
          />
        </div>
        <div>
          Github URL:{" "}
          <input
            defaultValue={props.student.github_url}
            name="github_url"
            type="text"
          />
        </div>
        <div>
          Photo:{" "}
          <input defaultValue={props.student.photo} name="photo" type="text" />
        </div>
        <button type="submit">Update student</button>
      </form>
    </div>
  );
}
