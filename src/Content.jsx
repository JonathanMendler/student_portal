<<<<<<< HEAD
import axios from "axios";
import { useState } from "react";
import { StudentsShow } from "./StudentsShow";
import { Modal } from "./Modal";
=======
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
>>>>>>> 74c6d49e05cfa21b28d746fd93f9416932fa6f80

export function Content() {
  const [students, setStudents] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

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
        <h1>Test</h1>
        <StudentsShow student={currentStudent} />
      </Modal>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/modal" />
      </Routes>
    </div>
  );
}
