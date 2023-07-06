import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { StudentsShow } from "./StudentsShow";
import { Modal } from "./Modal";

export function Content() {
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const currentStudent = useState({});

  const setCurrentStudent = useState({});
  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };

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
        handleClose();
      });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  return (
    <div className="container">
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentsShow
          student={currentStudent}
          onUpdateStudent={handleUpdateStudent}
        />
      </Modal>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/students/:id"
          element={<StudentsShow student={currentStudent} />}
        />
      </Routes>
    </div>
  );
}
