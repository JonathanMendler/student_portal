import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { StudentsEdit } from "./StudentsEdit";

export function Content() {
  const currentStudent = useState({});

  const handleUpdateStudent = (id, params, successCallback) => {
    console.log("handleUpdateStudent", params);
    axios
      .patch(`http://localhost:3000/students/${id}.json`, params)
      .then((response) => {
        setStudents(
          students.map((student) => {
            if (student.id === response.data.id) {
              return response.data;
            } else {
              return student;
            }
          })
        );
        successCallback();
      });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/students/:id/edit"
          element={
            <StudentsEdit
              student={currentStudent}
              onUpdateStudent={handleUpdateStudent}
            />
          }
        />
      </Routes>
    </div>
  );
}
