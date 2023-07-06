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

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  return (
    <div className="container">
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <StudentsShow student={currentStudent} />
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
