import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function StudentsEdit(props) {
  const [student, setStudent] = useState({});
  const params = useParams();

  const handleShowStudent = () => {
    axios
      .get(`http://localhost:3000/students/${params.id}.json`)
      .then((response) => {
        setStudent(response.data);
      });
  };

  useEffect(handleShowStudent, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStudent(student.id, params, () => event.target.reset());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            defaultValue={student.first_name}
            name="first_name"
            type="text"
          />
        </div>
        <div>
          Last Name:{" "}
          <input
            defaultValue={student.last_name}
            name="last_name"
            type="text"
          />
        </div>
        <div>
          Email: <input defaultValue={student.email} name="email" type="text" />
        </div>
        <div>
          Phone Number:{" "}
          <input
            defaultValue={student.phone_number}
            name="phone_number"
            type="text"
          />
        </div>
        <div>
          Short Bio:{" "}
          <textarea
            defaultValue={student.short_bio}
            name="short_bio"
            rows="4"
          />
        </div>
        <div>
          LinkedIn:{" "}
          <input
            defaultValue={student.linkedin_url}
            name="linkedin_url"
            type="text"
          />
        </div>
        <div>
          Twitter:{" "}
          <input
            defaultValue={student.twitter_handle}
            name="twitter_handle"
            type="text"
          />
        </div>
        <div>
          Personal Blog:{" "}
          <input
            defaultValue={student.personal_website_url}
            name="personal_website_url"
            type="text"
          />
        </div>
        <div>
          Online Resume:{" "}
          <input
            defaultValue={student.online_resume_url}
            name="online_resume_url"
            type="text"
          />
        </div>
        <div>
          Github URL:{" "}
          <input
            defaultValue={student.github_url}
            name="github_url"
            type="text"
          />
        </div>
        <div>
          Photo: <input defaultValue={student.photo} name="photo" type="text" />
        </div>
        <button type="submit">Update student</button>
      </form>
    </div>
  );
}
